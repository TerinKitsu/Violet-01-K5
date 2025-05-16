(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day1/Bai10/Data_16/MainScript_16.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c0466hPasNFaKmAOQDkM38g', 'MainScript_16', __filename);
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
        //# sourceMappingURL=MainScript_16.js.map
        