(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day1/Bai6/Data_12/MainScript_12.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '12ea4eYD4JLwYuipx/7vcXV', 'MainScript_12', __filename);
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
        //# sourceMappingURL=MainScript_12.js.map
        