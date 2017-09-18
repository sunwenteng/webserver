/**
 * 这种隶属于游戏的逻辑控制器
 */
import log = require('../../util/log');
import WorldDB = require('../../database/impl/world_db');
import Role = require('../role');
import ErrorCode = require('../../util/error_code');
import BaseController = require('../base_controller');
import defines = require('../defines');
import TimeUtil = require('../../util/time');
import GameUtil = require('../../util/game_util');
// 所有表数据
import ConfigStruct = require('../../config/data/config_struct');
var cm = require('../../config').configMgr;
var cmd = require('../../share/cmd')['cmd'];

export function enter(uid, args):void {
    var role = new Role(uid);
    role.load((err, isExist)=> {
        if (!isExist) {
            role.create((err)=> {
                if (err) {
                    log.sError('role create error, uid=' + uid);
                    return BaseController.send(uid, 'sc_game_enter', {error: ErrorCode.MYSQL.EXEC_ERROR});
                }

                // TODO add all hero
                var allHeroConfig = cm.herodb.all();
                role.data.heroes = {};
                for (var heroId in allHeroConfig) {
                    var hero = new defines.Hero();
                    hero.id = parseInt(heroId);
                    hero.lvl = 10;
                    hero.skills.push({id: allHeroConfig[heroId].skill, lvl: 1});
                    role.data.heroes[hero.id] = hero;
                }

                role.save(()=> {
                }, false, true);
                response(role);
            });
        }
        else {
            response(role);
        }
    });
}


function response(role) {
    for (var heroId in role.data.heroes) {
        caculateHeroPros(role.data.heroes[heroId]);
    }
    // TODO
    BaseController.send(role.data.uid, 'sc_game_heartBeat', {});
    BaseController.send(role.data.uid, 'sc_game_enter', {role: role.data}, true);
}

export function heartBeat(uid, args):void {
    BaseController.send(uid, 'sc_game_heartBeat', {}, true);
}

interface HeroDefSkill extends defines.HeroSkill {
    hero:FightHero;
}

class FightTeam {
    maxCombat:number = 0;
    curCombat:number = 0;
    agility:number = 0;
    defence:number = 0;
    dodge:number = 0;
    power:number = 0;
    heroes:FightHero[] = [];

    resist:number = 0;
    avoid:number = 0;
    enhance:number = 0;

    defSkills:HeroDefSkill[] = [];
}



class FightHero extends defines.Hero {
    uid:number = 0;
    // effectId-skillId
    effects:{[effectId:number]:number} = {};
    type:number = 0;// 1=hero, 2=monster
}

function isDefSKill(skillConfig:ConfigStruct.skillDB) {
    switch (skillConfig.condition) {
        case 7:
            return true;
        default:
            return false;
    }
}

function createFightTeam(role:Role, heroIds:number[], report:defines.BattleReport):FightTeam {
    var fightTeam = new FightTeam(), hero:any = null;
    var battleHeroes:defines.BattleHero[] = [];
    for (var i = 0; i < heroIds.length; i++) {
        var fightHero = new FightHero();

        var totalSize = 0;
        for (var j = 0; j < report.teams.length; j++) {
            totalSize += report.teams[j].heroes.length;
        }
        fightHero.uid = totalSize + battleHeroes.length + 1;

        if (role) {
            hero = role.data.heroes[heroIds[i]];
            if (!hero) {
                return null;
            }
            caculateHeroPros(hero);
            for (var j = 0; j < hero.skills.length; j++) {
                var skillId = hero.skills[j].id;
                var skillConfig = cm.skilldb.get(skillId);
                if (!skillConfig) {
                    return null;
                }

                if (isDefSKill(skillConfig)) {
                    fightTeam.defSkills.push({id: skillConfig.ID, lvl: 1, hero: fightHero});
                }
                else if (skillConfig.type === 1)
                    fightHero.skills.push({id: skillConfig.ID, lvl: 1});
            }

            for (var obj in hero) {
                fightHero[obj] = hero[obj];
            }

            fightHero.type = 1;
        }
        else {
            hero = cm.monsterdb.get(heroIds[i]);
            if (!hero) {
                return null;
            }

            for (var j = 0; j < hero['JSON_skills'].length; j++) {
                var skillId = hero['JSON_skills'][j];
                var skillConfig = cm.skilldb.get(skillId);
                if (!skillConfig) {
                    return null;
                }

                if (isDefSKill(skillConfig)) {
                    fightTeam.defSkills.push({id: skillConfig.ID, lvl: 1, hero: fightHero});
                }
                else if (skillConfig.type === 1)
                    fightHero.skills.push({id: skillConfig.ID, lvl: 1});
            }

            fightHero.id = hero.ID;
            fightHero.combat = hero.combat;
            fightHero.agility = hero.agility;
            fightHero.defence = hero.defence;
            fightHero.dodge = hero.dodge;
            fightHero.power = hero.power;
            fightHero.type = 2;
        }

        fightTeam.maxCombat += hero.combat;
        fightTeam.agility += hero.agility;
        fightTeam.defence += hero.defence;
        fightTeam.dodge += hero.dodge;
        fightTeam.power += hero.power;

        fightTeam.heroes.push(fightHero);

        battleHeroes.push({
            uid: fightHero.uid,
            id: fightHero.id,
            type: fightHero.type
        });
    }

    report.teams.push({
        combat: fightTeam.maxCombat,
        agility: fightTeam.agility,
        defence: fightTeam.defence,
        dodge: fightTeam.dodge,
        power: fightTeam.power,
        heroes: battleHeroes
    });

    fightTeam.curCombat = fightTeam.maxCombat;
    fightTeam.resist = fightTeam.defence / (fightTeam.defence + 100);
    fightTeam.avoid = fightTeam.dodge / (fightTeam.dodge + 100);
    fightTeam.enhance = fightTeam.enhance * 0.01 + 1;
    return fightTeam;
}

function checkAvoid(skillConfig:ConfigStruct.skillDB, defFightTeam:FightTeam):boolean {
    if (skillConfig) {
        // 技能效果无视闪避、暴击、纯粹
        return !(skillConfig.effect1 === 1 || skillConfig.effect2 === 1 || skillConfig.effect3 === 1
        || skillConfig.action === 3 || skillConfig.action === 2);
    }
    else {
        return GameUtil.randInt(0, 100) < defFightTeam.dodge / (100 + defFightTeam.dodge) * 100;
    }
}

function getHeroBasicDamage(hero:defines.Hero):number {
    return hero.combat * 0.3;
}

function doSkillAction(curRoundIdx:number, hero:FightHero, skillId:number, atkFightTeam:FightTeam, defFightTeam:FightTeam, rounds:defines.BattleRound[]):boolean {
    var round:defines.BattleRound = {
        id: curRoundIdx,
        heroUid: hero.uid,
        skillId: skillId,
        heal: 0,
        damage: 0,
        bAvoid: false
    };

    if (!skillId) {
        round.bAvoid = checkAvoid(null, defFightTeam);
        if (!round.bAvoid) {
            round.damage = getHeroBasicDamage(hero);
            round.damage = damageMod(round.damage, atkFightTeam, defFightTeam);
            round.damage = checkEffects(round.damage, hero);
        }
    }
    else {
        var skillConfig = cm.skilldb.get(skillId);
        switch (skillConfig.action) {
            case 1:
                // 基础伤害 xxx %
                round.damage = getHeroBasicDamage(hero) * skillConfig.JSON__actionArgs[0] / 100;
                round.damage = damageMod(round.damage, atkFightTeam, defFightTeam);
                break;
            case 3:
                // 纯粹伤害 xxx %
                round.damage = getHeroBasicDamage(hero) * skillConfig.JSON__actionArgs[0] / 100;
                break;
            case 2:
                // 暴击伤害 xxx %
                round.damage = getHeroBasicDamage(hero)
                    * (skillConfig.JSON__actionArgs[0] / 100 + atkFightTeam.agility * 0.005)
                    * (1 - defFightTeam.defence / (100 + defFightTeam.defence))
                    * atkFightTeam.enhance;
                break;
            case 10:
                // 造成己方已损失战力 xxx %
                round.damage = (atkFightTeam.maxCombat - atkFightTeam.curCombat) * skillConfig.JSON__actionArgs[0] / 100;
                round.damage = damageMod(round.damage, atkFightTeam, defFightTeam);
                break;
            case 11:
                // 造成己方当前战力 xxx %
                round.damage = atkFightTeam.curCombat * skillConfig.JSON__actionArgs[0] / 100;
                round.damage = damageMod(round.damage, atkFightTeam, defFightTeam);
                break;
            case 12:
                // 造成己方总战力 xxx %
                round.damage = atkFightTeam.maxCombat * skillConfig.JSON__actionArgs[0] / 100;
                round.damage = damageMod(round.damage, atkFightTeam, defFightTeam);
                break;
            case 20:
                // 造成敌方已损失战力 xxx %
                round.damage = (defFightTeam.maxCombat - defFightTeam.curCombat) * skillConfig.JSON__actionArgs[0] / 100;
                round.damage = damageMod(round.damage, atkFightTeam, defFightTeam);
                break;
            case 21:
                // 造成敌方当前战力 xxx %
                round.damage = defFightTeam.curCombat * skillConfig.JSON__actionArgs[0] / 100;
                round.damage = damageMod(round.damage, atkFightTeam, defFightTeam);
                break;
            case 22:
                // 造成敌方总战力 xxx %
                round.damage = defFightTeam.maxCombat * skillConfig.JSON__actionArgs[0] / 100;
                round.damage = damageMod(round.damage, atkFightTeam, defFightTeam);
                break;
            case 30:
                // 复制上一回合技能
                var lastSkillId = 0;
                if (curRoundIdx) {
                    var lastSkillId = 0;
                    for (var i = 0; i < rounds.length; i++) {
                        var round = rounds[i];
                        if (round.id === curRoundIdx - 1) {
                            lastSkillId = round.skillId;
                            break;
                        }
                    }
                }
                return doSkillAction(curRoundIdx, hero, lastSkillId, atkFightTeam, defFightTeam, rounds);
                break;
            default:
                break;
        }

        // 判断是否闪避，闪避造成伤害为0
        round.bAvoid = checkAvoid(skillConfig, defFightTeam);
        if (!round.bAvoid) {
            // 检查自身buf
            round.damage = Math.round(round.damage);
            round.damage = checkEffects(round.damage, hero);
        }

        // 检查此次技能效果
        for (var i = 1; i <= 3; i++) {
            var key = 'effect' + i;
            var vKey = 'JSON__effectArgs' + i;
            switch (skillConfig[key]) {
                case 10:
                    // 提升战力，为敌方总战力 xxx %
                    round.heal += Math.round(defFightTeam.maxCombat * skillConfig[vKey][0] / 100);
                    break;
                case 11:
                    // 提升战力，为敌方当前战力 xxx %
                    round.heal += Math.round(defFightTeam.curCombat * skillConfig[vKey][0] / 100);
                    break;
                case 12:
                    // 提升战力，为己方总战力 xxx %
                    round.heal += Math.round(atkFightTeam.maxCombat * skillConfig[vKey][0] / 100);
                    break;
                case 13:
                    // 提升战力，为己方当前战力 xxx %
                    round.heal += Math.round(atkFightTeam.curCombat * skillConfig[vKey][0] / 100);
                    break;
                case 14:
                    // 提升战力，为本次伤害 xxx %
                    round.heal += Math.round(round.damage * skillConfig[vKey][0] / 100);
                    break;
                case 20:
                case 21:
                    // 添加buf
                    // 敌方下回合低于XXX的技能无法触发
                    // 敌方下回合伤害为1
                    hero.effects[skillConfig[key]] = skillConfig[vKey];
                    break;
                default:
                    break;
            }
        }
    }

    rounds.push(round);

    atkFightTeam.curCombat += round.heal;
    atkFightTeam.maxCombat = atkFightTeam.curCombat > atkFightTeam.maxCombat ? atkFightTeam.curCombat : atkFightTeam.maxCombat;
    defFightTeam.curCombat -= round.damage;

    return true;
}

function caculateHeroPros(hero:defines.Hero) {
    var heroConfig = cm.herodb.get(hero.id);
    hero.combat = heroConfig.combat + heroConfig.combatGrowLv * hero.lvl;
}

function doDefSkill(roundIdx:number, atkFightTeam:FightTeam, defFightTeam:FightTeam, rounds:defines.BattleRound[]):boolean {
    var playSkillId = 0, fightHero:FightHero = null;

    for (var i = 0; i < defFightTeam.defSkills.length; i++) {
        var skillId = defFightTeam.defSkills[i].id;
        // 敌方攻击未命中
        var skillConfig = cm.skilldb.get(skillId);
        if (GameUtil.randInt(0, 100) < skillConfig.possibility) {
            if (skillConfig.condition === 7 && rounds[rounds.length - 1].bAvoid) {
                playSkillId = skillId;
                fightHero = defFightTeam.defSkills[i].hero;
                break;
            }
        }
    }

    if (playSkillId) {
        if (!doSkillAction(roundIdx, fightHero, playSkillId, defFightTeam, atkFightTeam, rounds)) {
            return false;
        }
        if (!doDefSkill(roundIdx, defFightTeam, atkFightTeam, rounds)) {
            return false;
        }

    }
    return true;
}

function checkEffects(damage, hero:FightHero):number {
    return hero.effects[21] ? 1 : damage;
}

function doSkillCondition(curRoundIdx:number, hero:FightHero, atkFightTeam:FightTeam, defFightTeam:FightTeam):number {
    var playSkillId = 0;
    for (var i = 0; i < hero.skills.length; i++) {
        var skillId = hero.skills[i].id;
        var skillConfig = cm.skilldb.get(skillId);
        if (!skillConfig) {
            log.sError('skillConfig not found, id=' + skillId);
            return -1;
        }

        // 检查是否有负面buf 导致技能无法触发，并判断是否释放技能
        if (hero.effects[20] && hero.effects[20] >= skillConfig.possibility) {
            delete hero.effects[20];
            playSkillId = 0;
            break;
        }
        else if (hero.effects[20] && hero.effects[20] < skillConfig.possibility) {
            delete hero.effects[20];
        }
        else if (GameUtil.randInt(0, 100) < skillConfig.possibility) {
            switch (skillConfig.condition) {
                case 0:
                    playSkillId = skillConfig.ID;
                    break;
                case 1:
                    if (atkFightTeam.curCombat <= skillConfig.JSON__condArgs[0]) {
                        playSkillId = skillConfig.ID;
                    }
                    break;
                case 2:
                    if (atkFightTeam.curCombat > skillConfig.JSON__condArgs[0]) {
                        playSkillId = skillConfig.ID;
                    }
                    break;
                case 3:
                    if (defFightTeam.curCombat <= skillConfig.JSON__condArgs[0]) {
                        playSkillId = skillConfig.ID;
                    }
                    break;
                case 4:
                    if (defFightTeam.curCombat > skillConfig.JSON__condArgs[0]) {
                        playSkillId = skillConfig.ID;
                    }
                    break;
                case 5:
                    if (curRoundIdx <= skillConfig.JSON__condArgs[0]) {
                        playSkillId = skillConfig.ID;
                    }
                    break;
                case 6:
                    if (curRoundIdx > skillConfig.JSON__condArgs[0]) {
                        playSkillId = skillConfig.ID;
                    }
                    break;
                default:
                    break;
            }

            if (playSkillId) {
                break;
            }
        }
    }

    return playSkillId;
}

function battleInner(roundIdx:number, atkFightTeam:FightTeam, defFightTeam:FightTeam, rounds:defines.BattleRound[]):boolean {
    var hero:FightHero = atkFightTeam.heroes[Math.floor(roundIdx / 2) % atkFightTeam.heroes.length];

    // 技能为己方出手判断 begin
    // 判断释放技能
    var playSkillId = doSkillCondition(roundIdx, hero, atkFightTeam, defFightTeam);
    if (playSkillId < 0) {
        return false;
    }
    // 执行技能
    doSkillAction(roundIdx, hero, playSkillId, atkFightTeam, defFightTeam, rounds);
    // 技能为己方出手判断 end

    // 技能为敌方出手判断 begin
    doDefSkill(roundIdx, atkFightTeam, defFightTeam, rounds);
    // 技能为敌方出手判断 end

    return true;
}

function battle(atkRole:Role, atkIds:number[], defRole:Role, defIds, report:defines.BattleReport):boolean {
    var atkFightTeam:FightTeam, defFightTeam:FightTeam;
    atkFightTeam = createFightTeam(atkRole, atkIds, report);
    if (!atkFightTeam) {
        return false;
    }
    defFightTeam = createFightTeam(defRole, defIds, report);
    if (!defFightTeam) {
        return false;
    }

    var roundIdx = 0;
    while (true) {
        if (report.rounds.length &&
            (report.rounds[report.rounds.length - 1].id > maxRoundsSize
            || atkFightTeam.curCombat <= 0 || defFightTeam.curCombat <= 0)) {
            break;
        }

        if (atkFightTeam.agility >= defFightTeam.agility) {
            if (!battleInner(
                    roundIdx,
                    roundIdx % 2 === 0 ? atkFightTeam : defFightTeam,
                    roundIdx % 2 === 0 ? defFightTeam : atkFightTeam,
                    report.rounds)) {
                return false;
            }
        }
        else {
            if (!battleInner(
                    roundIdx,
                    roundIdx % 2 === 0 ? defFightTeam : atkFightTeam,
                    roundIdx % 2 === 0 ? atkFightTeam : defFightTeam,
                    report.rounds)) {
                return false;
            }
        }


        ++roundIdx;
    }

    report.win = !(report.rounds.length > maxRoundsSize || atkFightTeam.curCombat <= 0);
}

function damageMod(damage, atkFightTeam, defFightTeam):number {
    damage *= (1 - defFightTeam.resist) * atkFightTeam.enhance;
    return damage;
}

var maxRoundsSize = 100;
export function pve(uid, args):void {
    BaseController.loadRole(uid, (role:Role)=> {
        var atkIds = args.atkIds;
        var defIds = [args.monsterId];
        var report:defines.BattleReport = {teams: [], win: false, rounds: []};
        if (battle(role, atkIds, null, defIds, report)) {
            return BaseController.send(uid, 'sc_game_pve', {"error": ErrorCode.COMMON.CONFIG_NOT_FOUND});
        }
        BaseController.send(uid, 'sc_game_pve', {report: report}, true);
    });
}