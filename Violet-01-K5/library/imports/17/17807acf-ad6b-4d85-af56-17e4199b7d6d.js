"use strict";
cc._RF.push(module, '17807rPrWtNha9WF+QZm31t', 'MainScript_14');
// Day1/Bai8/Data_14/MainScript_14.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        hpLb: cc.Label,
        addBtn: cc.Button,
        resetBtn: cc.Button
    },

    onLoad: function onLoad() {
        this.hp = 0;
    },
    start: function start() {
        this.hpLb.sting = this.hp;
    },
    onAddClicked: function onAddClicked() {
        this.hp += 10;
        this.hpLb.string = this.hp;
    },
    onResetClicked: function onResetClicked() {
        this.hp = 0;
        this.hpLb.string = this.hp;
    }
});

cc._RF.pop();