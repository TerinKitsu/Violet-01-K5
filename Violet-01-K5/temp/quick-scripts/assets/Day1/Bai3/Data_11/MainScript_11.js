(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day1/Bai3/Data_11/MainScript_11.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7131f4NKZ9Bn4H2+QOcd2rg', 'MainScript_11', __filename);
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
        //# sourceMappingURL=MainScript_11.js.map
        