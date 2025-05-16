(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day1/Bai11/Data_17/MainScript_17.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7ad20KlgTVDRa5UhcDAKhDU', 'MainScript_17', __filename);
// Day1/Bai11/Data_17/MainScript_17.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        addBtn: cc.Button,
        showBtn: cc.Button
    },

    onLoad: function onLoad() {
        this.item = ["Sword", "Shield", "Bow", "Axe", "Spear"];
    },
    onAddClicked: function onAddClicked() {
        this.item.push("New Item Added");
    },
    onShowClicked: function onShowClicked() {
        console.log(this.item);
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
        //# sourceMappingURL=MainScript_17.js.map
        