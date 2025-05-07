"use strict";
cc._RF.push(module, '12ea4eYD4JLwYuipx/7vcXV', 'MainScript_12');
// Day1/Bai6/Data_12/MainScript_12.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        context: cc.Label,
        startBtn: cc.Button,
        exitBtn: cc.Button
    },

    onLoad: function onLoad() {},
    start: function start() {
        this.context;
    },


    // update (dt) {},
    onClickStart: function onClickStart() {
        this.context.string = "Game is loading...";
        this.context;
    },
    onClickExit: function onClickExit() {
        this.context.string = "Goodbye";
        this.context;
    }
});

cc._RF.pop();