"use strict";
cc._RF.push(module, '7131f4NKZ9Bn4H2+QOcd2rg', 'MainScript_11');
// Day1/Bai3/Data_11/MainScript_11.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        hpView: cc.Label,
        scoreView: cc.Label,
        button: cc.Button
    },

    onLoad: function onLoad() {
        this.name = "Violet";
        this.hp = 0;
        this.score = 0;
    },
    start: function start() {
        this.hpView.string = "HP: " + this.hp;
        this.scoreView.string = "Score: " + this.score;
    },


    // update (dt) {},
    onClick: function onClick() {
        this.score++;
        if (this.score % 10 == 0) {
            this.hp++;
        }
        this.hpView.string = "HP: " + this.hp;
        this.scoreView.string = "Score: " + this.score;
    }
});

cc._RF.pop();