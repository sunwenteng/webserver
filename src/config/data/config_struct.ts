//********** header **********//
import fs = require('fs');
import CustomError = require('../../util/errors');
import ERRC = require('../../util/error_code');


//********** body **********//
// boxdb
export class boxDB {
	ID:any;			//编号
	boxId:any;		//掉落包
	groupId:any;	//掉落组
	rate:any;		//权值/概率
	gold:any;		//金币
	diamond:any;	//钻石
	itemId:any;		//资源ID
	itemQty:any;	//资源数量
	constructor(data) {
		this.ID = data.ID;
		this.boxId = data.boxId;
		this.groupId = data.groupId;
		this.rate = data.rate;
		this.gold = data.gold;
		this.diamond = data.diamond;
		this.itemId = data.itemId;
		this.itemQty = data.itemQty;
	}
}
class boxDBMgr {
    boxDBConfig : {[ID:number]: boxDB} = {};
    constructor(data) {
        this.boxDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.boxDBConfig[data[key].ID] = new boxDB(data[key]);
        });
    }
    public get(ID:number):boxDB {
        var config = this.boxDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, boxdb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: boxDB} {
        return this.boxDBConfig;
    }
}

// buildingdb
export class buildingDB {
	ID:any;				//编号
	name:any;			//名称
	icon:any;			//ICON
	openLevel:any;		//开放等级
	outputItemId:any;	//产出资源
	upgradeId:any;		//升级ID
	constructor(data) {
		this.ID = data.ID;
		this.name = data.name;
		this.icon = data.icon;
		this.openLevel = data.openLevel;
		this.outputItemId = data.outputItemId;
		this.upgradeId = data.upgradeId;
	}
}
class buildingDBMgr {
    buildingDBConfig : {[ID:number]: buildingDB} = {};
    constructor(data) {
        this.buildingDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.buildingDBConfig[data[key].ID] = new buildingDB(data[key]);
        });
    }
    public get(ID:number):buildingDB {
        var config = this.buildingDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, buildingdb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: buildingDB} {
        return this.buildingDBConfig;
    }
}

// building_upgradedb
export class building_upgradeDB {
	ID:any;			//编号
	upgradeId:any;	//升级ID
	level:any;		//等级
	output:any;		//每小时产量
	costGold:any;	//升级花费金币
	constructor(data) {
		this.ID = data.ID;
		this.upgradeId = data.upgradeId;
		this.level = data.level;
		this.output = data.output;
		this.costGold = data.costGold;
	}
}
class building_upgradeDBMgr {
    building_upgradeDBConfig : {[ID:number]: building_upgradeDB} = {};
    constructor(data) {
        this.building_upgradeDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.building_upgradeDBConfig[data[key].ID] = new building_upgradeDB(data[key]);
        });
    }
    public get(ID:number):building_upgradeDB {
        var config = this.building_upgradeDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, building_upgradedb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: building_upgradeDB} {
        return this.building_upgradeDBConfig;
    }
}

// employeedb
export class employeeDB {
	ID:any;				//ID
	name:any;			//名称
	char:any;			//资源
	json_equipType:any;	//可造类别
	constructor(data) {
		this.ID = data.ID;
		this.name = data.name;
		this.char = data.char;
		this.json_equipType = data.json_equipType;
	}
}
class employeeDBMgr {
    employeeDBConfig : {[ID:number]: employeeDB} = {};
    constructor(data) {
        this.employeeDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.employeeDBConfig[data[key].ID] = new employeeDB(data[key]);
        });
    }
    public get(ID:number):employeeDB {
        var config = this.employeeDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, employeedb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: employeeDB} {
        return this.employeeDBConfig;
    }
}

// equipdb
export class equipDB {
	ID:any;				//编号
	name:any;			//名称
	level:any;			//等级
	icon:any;			//ICON
	workerId:any;		//工匠ID
	tableId:any;		//工作台ID
	tableLevel:any;		//工作台等级
	price:any;			//售价
	json_srcItem:any;	//物品原料
	json_srcEquip:any;	//装备原料
	costTime:any;		//
	type:any;			//類別
	unlockLevel:any;	//解锁等级
	prevEquipId:any;	//前置装备ID
	prevEquipQty:any;	//前置装备数量
	constructor(data) {
		this.ID = data.ID;
		this.name = data.name;
		this.level = data.level;
		this.icon = data.icon;
		this.workerId = data.workerId;
		this.tableId = data.tableId;
		this.tableLevel = data.tableLevel;
		this.price = data.price;
		this.json_srcItem = data.json_srcItem;
		this.json_srcEquip = data.json_srcEquip;
		this.costTime = data.costTime;
		this.type = data.type;
		this.unlockLevel = data.unlockLevel;
		this.prevEquipId = data.prevEquipId;
		this.prevEquipQty = data.prevEquipQty;
	}
}
class equipDBMgr {
    equipDBConfig : {[ID:number]: equipDB} = {};
    constructor(data) {
        this.equipDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.equipDBConfig[data[key].ID] = new equipDB(data[key]);
        });
    }
    public get(ID:number):equipDB {
        var config = this.equipDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, equipdb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: equipDB} {
        return this.equipDBConfig;
    }
}

// equip_newdb
export class equip_newDB {
	ID:any;			//编号
	name:any;		//名称
	type:any;		//类别
	isWeapon:any;	//是否武器
	init:any;		//初始配方
	icon:any;		//ICON
	price:any;		//售价
	combat:any;		//战斗力
	JSON_mat:any;	//材料
	craftTime:any;	//建造时间
	JSON_lock1:any;	//解锁1
	JSON_lock2:any;	//解锁2
	JSON_lock3:any;	//解锁3
	constructor(data) {
		this.ID = data.ID;
		this.name = data.name;
		this.type = data.type;
		this.isWeapon = data.isWeapon;
		this.init = data.init;
		this.icon = data.icon;
		this.price = data.price;
		this.combat = data.combat;
		this.JSON_mat = data.JSON_mat;
		this.craftTime = data.craftTime;
		this.JSON_lock1 = data.JSON_lock1;
		this.JSON_lock2 = data.JSON_lock2;
		this.JSON_lock3 = data.JSON_lock3;
	}
}
class equip_newDBMgr {
    equip_newDBConfig : {[ID:number]: equip_newDB} = {};
    constructor(data) {
        this.equip_newDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.equip_newDBConfig[data[key].ID] = new equip_newDB(data[key]);
        });
    }
    public get(ID:number):equip_newDB {
        var config = this.equip_newDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, equip_newdb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: equip_newDB} {
        return this.equip_newDBConfig;
    }
}

// fornituredb
export class fornitureDB {
	ID:any;	//a
	aa:any;	//b
	constructor(data) {
		this.ID = data.ID;
		this.aa = data.aa;
	}
}
class fornitureDBMgr {
    fornitureDBConfig : {[ID:number]: fornitureDB} = {};
    constructor(data) {
        this.fornitureDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.fornitureDBConfig[data[key].ID] = new fornitureDB(data[key]);
        });
    }
    public get(ID:number):fornitureDB {
        var config = this.fornitureDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, fornituredb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: fornitureDB} {
        return this.fornitureDBConfig;
    }
}

// herodb
export class heroDB {
	ID:any;				//编号
	skinId:any;			//模型id
	skeleton:any;		//骨骼
	upgradeId:any;		//升阶ID
	combat:any;			//基础战力
	combatGrowLv:any;	//战力等级成长
	skill:any;			//初始技能
	constructor(data) {
		this.ID = data.ID;
		this.skinId = data.skinId;
		this.skeleton = data.skeleton;
		this.upgradeId = data.upgradeId;
		this.combat = data.combat;
		this.combatGrowLv = data.combatGrowLv;
		this.skill = data.skill;
	}
}
class heroDBMgr {
    heroDBConfig : {[ID:number]: heroDB} = {};
    constructor(data) {
        this.heroDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.heroDBConfig[data[key].ID] = new heroDB(data[key]);
        });
    }
    public get(ID:number):heroDB {
        var config = this.heroDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, herodb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: heroDB} {
        return this.heroDBConfig;
    }
}

// hero_upgradedb
export class hero_upgradeDB {
	ID:any;					//编号
	upgradeId:any;			//升阶ID
	grade:any;				//阶数
	JSON_costEquip1:any;	//装备碎片1
	JSON_attri1:any;		//提升四围1
	JSON_costEquip2:any;	//装备碎片2
	JSON_attri2:any;		//提升四围2
	JSON_costEquip3:any;	//装备碎片3
	JSON_attri3:any;		//提升四围3
	skill:any;				//解锁技能
	constructor(data) {
		this.ID = data.ID;
		this.upgradeId = data.upgradeId;
		this.grade = data.grade;
		this.JSON_costEquip1 = data.JSON_costEquip1;
		this.JSON_attri1 = data.JSON_attri1;
		this.JSON_costEquip2 = data.JSON_costEquip2;
		this.JSON_attri2 = data.JSON_attri2;
		this.JSON_costEquip3 = data.JSON_costEquip3;
		this.JSON_attri3 = data.JSON_attri3;
		this.skill = data.skill;
	}
}
class hero_upgradeDBMgr {
    hero_upgradeDBConfig : {[ID:number]: hero_upgradeDB} = {};
    constructor(data) {
        this.hero_upgradeDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.hero_upgradeDBConfig[data[key].ID] = new hero_upgradeDB(data[key]);
        });
    }
    public get(ID:number):hero_upgradeDB {
        var config = this.hero_upgradeDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, hero_upgradedb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: hero_upgradeDB} {
        return this.hero_upgradeDBConfig;
    }
}

// itemdb
export class itemDB {
	ID:any;		//ID
	name:any;	//名字
	spec:any;	//是否稀有物品
	icon:any;	//ICON
	constructor(data) {
		this.ID = data.ID;
		this.name = data.name;
		this.spec = data.spec;
		this.icon = data.icon;
	}
}
class itemDBMgr {
    itemDBConfig : {[ID:number]: itemDB} = {};
    constructor(data) {
        this.itemDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.itemDBConfig[data[key].ID] = new itemDB(data[key]);
        });
    }
    public get(ID:number):itemDB {
        var config = this.itemDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, itemdb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: itemDB} {
        return this.itemDBConfig;
    }
}

// monsterdb
export class monsterDB {
	ID:any;				//编号
	avatar:any;			//怪物资源
	combat:any;			//战斗力
	agility:any;		//先攻
	defence:any;		//防御
	dodge:any;			//闪避
	power:any;			//王者
	JSON_skills:any;	//技能
	constructor(data) {
		this.ID = data.ID;
		this.avatar = data.avatar;
		this.combat = data.combat;
		this.agility = data.agility;
		this.defence = data.defence;
		this.dodge = data.dodge;
		this.power = data.power;
		this.JSON_skills = data.JSON_skills;
	}
}
class monsterDBMgr {
    monsterDBConfig : {[ID:number]: monsterDB} = {};
    constructor(data) {
        this.monsterDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.monsterDBConfig[data[key].ID] = new monsterDB(data[key]);
        });
    }
    public get(ID:number):monsterDB {
        var config = this.monsterDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, monsterdb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: monsterDB} {
        return this.monsterDBConfig;
    }
}

// role_expdb
export class role_expDB {
	ID:any;		//等级
	exp:any;	//升级所需经验
	constructor(data) {
		this.ID = data.ID;
		this.exp = data.exp;
	}
}
class role_expDBMgr {
    role_expDBConfig : {[ID:number]: role_expDB} = {};
    constructor(data) {
        this.role_expDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.role_expDBConfig[data[key].ID] = new role_expDB(data[key]);
        });
    }
    public get(ID:number):role_expDB {
        var config = this.role_expDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, role_expdb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: role_expDB} {
        return this.role_expDBConfig;
    }
}

// skilldb
export class skillDB {
	ID:any;					//编号
	name:any;				//名称
	icon:any;				//ICON
	type:any;				//技能类型
	condition:any;			//触发条件
	JSON__condArgs:any;		//触发条件参数
	possibility:any;		//触发几率
	action:any;				//行动类型
	JSON__actionArgs:any;	//行动参数
	effect1:any;			//效果1
	JSON__effectArgs1:any;	//效果1参数
	effect2:any;			//效果2
	JSON__effectArgs2:any;	//效果2参数
	effect3:any;			//效果3
	JSON__effectArgs3:any;	//效果3参数
	constructor(data) {
		this.ID = data.ID;
		this.name = data.name;
		this.icon = data.icon;
		this.type = data.type;
		this.condition = data.condition;
		this.JSON__condArgs = data.JSON__condArgs;
		this.possibility = data.possibility;
		this.action = data.action;
		this.JSON__actionArgs = data.JSON__actionArgs;
		this.effect1 = data.effect1;
		this.JSON__effectArgs1 = data.JSON__effectArgs1;
		this.effect2 = data.effect2;
		this.JSON__effectArgs2 = data.JSON__effectArgs2;
		this.effect3 = data.effect3;
		this.JSON__effectArgs3 = data.JSON__effectArgs3;
	}
}
class skillDBMgr {
    skillDBConfig : {[ID:number]: skillDB} = {};
    constructor(data) {
        this.skillDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.skillDBConfig[data[key].ID] = new skillDB(data[key]);
        });
    }
    public get(ID:number):skillDB {
        var config = this.skillDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, skilldb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: skillDB} {
        return this.skillDBConfig;
    }
}

// stagedb
export class stageDB {
	ID:any;			//编号
	name:any;		//名称
	prevId:any;		//前置
	monsterId:any;	//怪物ID
	rewardBox:any;	//奖励BOX
	constructor(data) {
		this.ID = data.ID;
		this.name = data.name;
		this.prevId = data.prevId;
		this.monsterId = data.monsterId;
		this.rewardBox = data.rewardBox;
	}
}
class stageDBMgr {
    stageDBConfig : {[ID:number]: stageDB} = {};
    constructor(data) {
        this.stageDBConfig = {};
        Object.keys(data).forEach((key) => {
            this.stageDBConfig[data[key].ID] = new stageDB(data[key]);
        });
    }
    public get(ID:number):stageDB {
        var config = this.stageDBConfig[ID];
        if (!config) {
            throw new CustomError.UserError(ERRC.COMMON.CONFIG_NOT_FOUND, {
                msg: 'COMMON.CONFIG_NOT_FOUND, stagedb, ID=' + ID
            })
        }
        return config;
    }
    public all():{[ID:number]: stageDB} {
        return this.stageDBConfig;
    }
}

//********** footer **********//
export class ConfigMgr {
	boxdb:boxDBMgr = null;
	buildingdb:buildingDBMgr = null;
	building_upgradedb:building_upgradeDBMgr = null;
	employeedb:employeeDBMgr = null;
	equipdb:equipDBMgr = null;
	equip_newdb:equip_newDBMgr = null;
	fornituredb:fornitureDBMgr = null;
	herodb:heroDBMgr = null;
	hero_upgradedb:hero_upgradeDBMgr = null;
	itemdb:itemDBMgr = null;
	monsterdb:monsterDBMgr = null;
	role_expdb:role_expDBMgr = null;
	skilldb:skillDBMgr = null;
	stagedb:stageDBMgr = null;

	public loadAllConfig(jsonDir) {
		var contents, json;

		/// boxdb
        try {
            contents = fs.readFileSync(jsonDir + 'boxdb.json');
            json = JSON.parse(contents);
            this.boxdb = new boxDBMgr(json);
        } catch (err) {
            throw new Error('boxdb.json read failed');
        }
		/// buildingdb
        try {
            contents = fs.readFileSync(jsonDir + 'buildingdb.json');
            json = JSON.parse(contents);
            this.buildingdb = new buildingDBMgr(json);
        } catch (err) {
            throw new Error('buildingdb.json read failed');
        }
		/// building_upgradedb
        try {
            contents = fs.readFileSync(jsonDir + 'building_upgradedb.json');
            json = JSON.parse(contents);
            this.building_upgradedb = new building_upgradeDBMgr(json);
        } catch (err) {
            throw new Error('building_upgradedb.json read failed');
        }
		/// employeedb
        try {
            contents = fs.readFileSync(jsonDir + 'employeedb.json');
            json = JSON.parse(contents);
            this.employeedb = new employeeDBMgr(json);
        } catch (err) {
            throw new Error('employeedb.json read failed');
        }
		/// equipdb
        try {
            contents = fs.readFileSync(jsonDir + 'equipdb.json');
            json = JSON.parse(contents);
            this.equipdb = new equipDBMgr(json);
        } catch (err) {
            throw new Error('equipdb.json read failed');
        }
		/// equip_newdb
        try {
            contents = fs.readFileSync(jsonDir + 'equip_newdb.json');
            json = JSON.parse(contents);
            this.equip_newdb = new equip_newDBMgr(json);
        } catch (err) {
            throw new Error('equip_newdb.json read failed');
        }
		/// fornituredb
        try {
            contents = fs.readFileSync(jsonDir + 'fornituredb.json');
            json = JSON.parse(contents);
            this.fornituredb = new fornitureDBMgr(json);
        } catch (err) {
            throw new Error('fornituredb.json read failed');
        }
		/// herodb
        try {
            contents = fs.readFileSync(jsonDir + 'herodb.json');
            json = JSON.parse(contents);
            this.herodb = new heroDBMgr(json);
        } catch (err) {
            throw new Error('herodb.json read failed');
        }
		/// hero_upgradedb
        try {
            contents = fs.readFileSync(jsonDir + 'hero_upgradedb.json');
            json = JSON.parse(contents);
            this.hero_upgradedb = new hero_upgradeDBMgr(json);
        } catch (err) {
            throw new Error('hero_upgradedb.json read failed');
        }
		/// itemdb
        try {
            contents = fs.readFileSync(jsonDir + 'itemdb.json');
            json = JSON.parse(contents);
            this.itemdb = new itemDBMgr(json);
        } catch (err) {
            throw new Error('itemdb.json read failed');
        }
		/// monsterdb
        try {
            contents = fs.readFileSync(jsonDir + 'monsterdb.json');
            json = JSON.parse(contents);
            this.monsterdb = new monsterDBMgr(json);
        } catch (err) {
            throw new Error('monsterdb.json read failed');
        }
		/// role_expdb
        try {
            contents = fs.readFileSync(jsonDir + 'role_expdb.json');
            json = JSON.parse(contents);
            this.role_expdb = new role_expDBMgr(json);
        } catch (err) {
            throw new Error('role_expdb.json read failed');
        }
		/// skilldb
        try {
            contents = fs.readFileSync(jsonDir + 'skilldb.json');
            json = JSON.parse(contents);
            this.skilldb = new skillDBMgr(json);
        } catch (err) {
            throw new Error('skilldb.json read failed');
        }
		/// stagedb
        try {
            contents = fs.readFileSync(jsonDir + 'stagedb.json');
            json = JSON.parse(contents);
            this.stagedb = new stageDBMgr(json);
        } catch (err) {
            throw new Error('stagedb.json read failed');
        }
	}
}
