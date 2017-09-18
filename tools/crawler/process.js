var fs = require('fs');

if (fs.existsSync('formula-final.csv')) {
    fs.unlinkSync('formula-final.csv');
}

if (fs.existsSync('item.csv')) {
    fs.unlinkSync('item.csv');
}

if (fs.existsSync('achievement.csv')) {
    fs.unlinkSync('achievement.csv');
}

var achievementStartId = 10000;
var allAchievement = [];

var index = {};

var itemStartId = 5000;
var indexItem = {};

var content = fs.readFileSync('./formula.csv').toString().toLowerCase();
var lines = content.toString().split('\n');

for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var cols = line.split(',');
    var str = cols[1];
    str = str.replace(/-/g, ' ');
    index[str] = cols[0];
}

for (i = 0; i < lines.length; i++) {
    var line = lines[i].replace(/-/g, ' ');
    var cols = line.split(',');

    var tArr = cols[4].split(' ');
    var l = tArr[tArr.length - 1];
    tArr = tArr.splice(0, tArr.length - 1);
    cols[4] = tArr.join(' ') + ',' + l;

    if (cols[6].indexOf(';') === -1)
        continue;

    var materials = cols[6].split(';');
    var t = [];
    for (var j = 0; j < materials.length; j++) {
        var material = materials[j];
        if (material === '')
            continue;
        var info = material.split(':');
        str = info[0].replace(/\*/g, '').replace(/\+/g, '');
        if (index[str]) {
            t.push(index[str] + ':' + info[1]);
        }
        else if(!indexItem[str]) {
            indexItem[str] = itemStartId + Object.keys(indexItem).length;
            fs.appendFileSync('item.csv', indexItem[str] + ',' + str + '\n');
            t.push(indexItem[str] + ':' + info[1]);
        }
        else if(indexItem[str]) {
            t.push(indexItem[str] + ':' + info[1]);
        }
        else {
            t.push(material);
        }
    }
    t = t.length === 0 ? [0] : t;
    cols[6] = t.join(';');

    t = [];
    var needAchievements = cols[9].split(';');
    for (var j = 0; j < needAchievements.length; j++) {
        var achievement = needAchievements[j];
        if(achievement.indexOf('成就') !== -1) {
            var aId = allAchievement.length + achievementStartId + 1;
            t.push(aId);
            allAchievement.push(aId);
            fs.appendFileSync('achievement.csv', aId + ',' + achievement + '\n');
        }
    }
    t = t.length === 0 ? [0] : t;
    cols[9] = t.join(';');

    t = [];
    var openFormulas = cols[10].split(';');
    for (var j = 0; j < openFormulas.length; j++) {
        var formula = openFormulas[j].replace(/\*/g, '').replace(/-/g, ' ');
        if(formula === '0' || formula.indexOf(cols[1]) === -1) {
            continue;
        }

        //if(formula.indexOf('x') === -1 || formula.indexOf('→') === -1) {
        //    console.error(cols[1] + ' open formula error, val=' + formula + ', id=' + cols[0]);
        //    continue;
        //}

        for (var k = 0; k < formula.length; k++) {
            if(formula[k] >= '0' && formula[k] <= '9') {
                break;
            }
        }

        var num = formula.substring(k, formula.indexOf('→')).trim();
        var newFormulaName = formula.substring(formula.lastIndexOf('→') + 1);
        if(newFormulaName[0] === ' ') {
            newFormulaName = newFormulaName.substring(1);
        }
        if(!index[newFormulaName]) {
            console.error(newFormulaName + ' not found, val=' + formula + ', id=' + cols[0]);
            continue;
        }
        t.push(num + ':' +index[newFormulaName]);
    }
    t = t.length === 0 ? [0] : t;
    cols[10] = t.join(';');

    lines[i] = cols.join(',');
}

content = lines.join('\n');

fs.writeFileSync('./formula-final.csv', content);

console.log('finish!');