/**
 * id       卡片标识
 * name     卡片名称
 * pow      力量点数
 * url      图片路径
 * text     卡片描述
 * type     卡片类型 0-近战 1-远程 2-工程 3-特殊
 * hero     是否是英雄卡片
 * skill    特殊效果 
 * group    阵营 0-中立 1-北方 2-松鼠 3-怪物 4-帝国 5-岛屿
 */

export default [
    {
        id: 'z01',
        pow: 1,
        name: '北方步兵',
        url: 'a/a01.png',
        text: '步兵',
        type: 0,
        hero: false,
        skill: [],
        group: 0
    }, {
        id: 'z03',
        pow: 15,
        name: '希里',
        url: 'z/z03.png',
        text: '外挂',
        type: 0,
        hero: true,
        skill: [],
        group: 0
    }, {
        id: 'a03',
        pow: 5,
        name: '巨人猎手',
        url: 'a/a03.png',
        text: 'double弓箭手',
        type: 1,
        hero: false,
        skill: ['same'],
        group: 1
    }, {
        id: 'a02',
        pow: 1,
        name: '投石工程师',
        url: 'a/a02.png',
        text: 'double弓箭手',
        type: 1,
        hero: false,
        skill: ['up'],
        group: 1
    }, {
        id: 'z02',
        pow: 0,
        name: '天晴',
        url: 'z/z02.png',
        text: '去除天气',
        type: 4,
        hero: false,
        skill: ['double'],
        group: 0
    }
];