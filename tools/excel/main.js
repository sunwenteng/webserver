'use strict';

const xlsx = require('xlsx');
const fs = require('fs');

function isColumn(cell, column) {
    return cell.indexOf(column) !== -1;
}

// function isRow(cell, row) {
//     return cell.index(row) !== -1;
// }
//
// function getColumn(cellName) {
//     let ret = '';
//     for (let i = 0; i < cellName.length; i++) {
//         let obj = cellName[i];
//         if(!(obj >='0' && obj <='9')) {
//             ret += obj;
//         }
//     }
//
//     return ret;
// }

function getRow(cellName) {
    let ret = '';
    for (let i = 0; i < cellName.length; i++) {
        let obj = cellName[i];
        if (obj >= '0' && obj <= '9') {
            ret += obj;
        }
    }

    return ret;
}

// let itemFile = xlsx.readFile(__dirname + '/Item.xlsx');
let itemBoxFile = xlsx.readFile(__dirname + '/ItemBox.xlsx');
let stageFile = xlsx.readFile(__dirname + '/Stage.xlsx');


// let item = itemFile.Sheets['Main'];
let itemBox = itemBoxFile.Sheets['Main'];
let stage = stageFile.Sheets['Main'];

let idx_item_itemBox = {};
let idx_itemBox_item = {};
let ret = {};

console.log('start building idx...');
for (let e in itemBox) {
    if (isColumn(e, 'G')) {
        let rowIdx = getRow(e);
        if (rowIdx <= 4) continue;

        let boxId = itemBox['C' + rowIdx].v;
        let itemId = itemBox[e].v;
        if (!idx_item_itemBox[itemId]) {
            idx_item_itemBox[itemId] = {};
        }
        idx_item_itemBox[itemId][boxId] = 1;

        if (!idx_itemBox_item[boxId]) {
            idx_itemBox_item[boxId] = {};
        }
        idx_itemBox_item[boxId][itemId] = 1;
    }
}
console.log('end building idx...');

console.log(JSON.stringify(idx_item_itemBox));
console.log(JSON.stringify(idx_itemBox_item));

console.log('start job...');
for (let e in stage) {
    // judge first drop
    if (isColumn(e, 'AX')) {
        let rowIdx = getRow(e);
        if (rowIdx <= 4) continue;

        // get box id
        let boxIdArr = [stage[e], stage['AZ' + rowIdx], stage['BB' + rowIdx], stage['BD' + rowIdx], stage['BF' + rowIdx], stage['BH' + rowIdx], stage['BJ' + rowIdx]];
        for (let i = 0; i < boxIdArr.length; i++) {
            let box = boxIdArr[i];
            if (!box) continue;

            let boxItemMap = idx_itemBox_item[box.v];
            if (boxItemMap) {
                for (let item in boxItemMap) {
                    // judge play type
                    if(stage['I' + rowIdx].v !== 1 ) {
                        continue;
                    }

                    if (!ret[item]) {
                        // get stage id
                        ret[item] = [stage['B' + rowIdx].v];
                    }
                    else {

                        ret[item].push(stage['B' + rowIdx].v);
                    }
                }
            }
        }
    }
}
console.log('end job...');

console.log('start del duplicate...');
for(let e in ret) {
    ret[e] = Array.from(new Set(ret[e]));
}
console.log('end del duplicate...');

console.log('start formatting...');
let str = "";
for (let i in ret) {
    str += i + ',' + ret[i].join('|') + '\n';

}
console.log('end formatting...');

fs.writeFileSync('out.csv', str);
console.log(JSON.stringify(ret));

