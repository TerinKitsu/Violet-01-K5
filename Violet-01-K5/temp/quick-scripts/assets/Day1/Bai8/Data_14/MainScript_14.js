(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day1/Bai8/Data_14/MainScript_14.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '17807rPrWtNha9WF+QZm31t', 'MainScript_14', __filename);
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
        //# sourceMappingURL=MainScript_14.js.map
        