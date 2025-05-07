"use strict";
cc._RF.push(module, '787af8FCqRFfa5AdG16ovhF', 'MainScript_13');
// Day1/Bai7/Data_13/MainScript_13.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        hpBox: cc.EditBox,
        manaBox: cc.EditBox,
        sumBtn: cc.Button,
        sumLb: cc.Label
    },

    onload: function onload() {
        this.sum = 0;
    },
    start: function start() {
        this.sumLb.string = this.sum;
    },
    onSumClick: function onSumClick() {
        this.sum = parseInt(this.hpBox.string) * parseInt(this.manaBox.string);
        this.sumLb.string = this.sum;
    }
});

cc._RF.pop();