(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day1/Bai7/Data_13/MainScript_13.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '787af8FCqRFfa5AdG16ovhF', 'MainScript_13', __filename);
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
        //# sourceMappingURL=MainScript_13.js.map
        