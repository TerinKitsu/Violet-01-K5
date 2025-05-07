"use strict";
cc._RF.push(module, 'c0466hPasNFaKmAOQDkM38g', 'MainScript_16');
// Day1/Bai10/Data_16/MainScript_16.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        value: 0,
        levelLb: cc.Label,
        checkBtn: cc.Button
    },

    start: function start() {
        this.levelLb.string = "Level: " + this.value + "";
    },
    onCheckClicked: function onCheckClicked() {
        if (this.value >= 1 && this.value <= 3) {
            this.levelLb.string = "Level: " + this.value + " Beginner";
        } else if (this.value >= 4 && this.value <= 7) {
            this.levelLb.string = "value: " + this.value + " Intermediate";
        } else if (this.value >= 8 && this.value <= 10) {
            this.levelLb.string = "value: " + this.value + " Expert";
        } else {
            this.levelLb.string = "value: " + this.value + " Invalid Level";
        }
    }
});

cc._RF.pop();