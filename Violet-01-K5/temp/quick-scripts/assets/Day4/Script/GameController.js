(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day4/Script/GameController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ab607s7rTVNSp4QnsUvK7Oo', 'GameController', __filename);
// Day4/Script/GameController.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        totalScoreLb: cc.Label,
        timeLb: cc.Label,
        resultPage: cc.Node,
        finalScoreLb: cc.Label,
        pausePanel: cc.Node,

        isPaused: false
    },

    onLoad: function onLoad() {
        this.resultPage.active = false;
        this.total = 0;
        this.time = 60;
        this.isGameOver = false;
    },
    start: function start() {
        this.timeLb.string = "Time \n" + this.time;
        this.countTime();
    },
    isGameOverReturn: function isGameOverReturn() {
        return this.isGameOver;
    },
    sumScore: function sumScore(score) {
        this.total += score;
        this.totalScoreLb.string = "Score: " + this.total;
    },
    countTime: function countTime() {
        var _this = this;

        this.scheduleOnce(function () {
            if (_this.time <= 0) {
                _this.isGameOver = true;
                _this.gameOverUI();
                return;
            }
            _this.time--;
            _this.timeLb.string = "Time \n" + _this.time;
            _this.countTime();
        }, 1);
    },
    gameOverUI: function gameOverUI() {
        this.finalScoreLb.string = this.totalScoreLb.string;
        this.resultPage.active = true;
    },
    onRestartGame: function onRestartGame() {
        cc.director.loadScene("D4_B1");
        this.onResumeGame();
    },
    onPauseGame: function onPauseGame() {
        this.isPaused = !this.isPaused;
        this.pausePanel.active = this.isPaused;
        if (this.isPaused) cc.director.pause();else this.onResumeGame();
    },
    onResumeGame: function onResumeGame() {
        if (this.isPaused) {
            this.isPaused = !this.isPaused;
            this.pausePanel.active = this.isPaused;
        }
        cc.director.resume();
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=GameController.js.map
        