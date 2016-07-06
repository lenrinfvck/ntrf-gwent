import _ from 'lodash';
//let _ = require('lodash');

let defaultOpt = {
    id: '',         //卡片标识
    name: '',       //卡片名称
    pow: 0,         //力量点数
    url: '',        //图片路径
    text: '',       //卡片描述
    type: 0,        //卡片类型 0-近战 1-远程 2-工程 3-特殊
    hero: false,    //是否是英雄卡片
    skill: [],      //特殊效果
    group: 0,       //阵营 0-中立 1-北方 2-松鼠 3-怪物 4-帝国 5-岛屿
};
class Card {
    constructor(opt) {
        _.merge(this, defaultOpt, opt);
        this.fpow = opt.pow; //用于展示当前值
    }
    
    // methods
}

export default Card;