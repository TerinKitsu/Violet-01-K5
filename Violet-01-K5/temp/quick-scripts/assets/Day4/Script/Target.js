(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day4/Script/Target.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '768b5PmbrtDkZVUh1ycpK9f', 'Target', __filename);
// Day4/Script/Target.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        score: 1,
        scoreLb: cc.Label
    },
    onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
    },
    start: function start() {
        var _this = this;

        this.score = this._randomInt(1, 10);
        this.scoreLb.string = "+ " + this.score;

        var timeLife = this._randomFloat(0.3, 0.8);
        this.scheduleOnce(function () {
            _this.onMiss();
        }, timeLife);
    },
    onMiss: function onMiss() {
        var event = new cc.Event.EventCustom("Target_Clicked", true);
        event.detail = { score: 0 };
        this.node.dispatchEvent(event);
        this.node.destroy();
    },
    onClick: function onClick() {
        var event = new cc.Event.EventCustom("Target_Clicked", true);
        event.detail = { score: this.score };
        this.node.dispatchEvent(event);
        console.log("Hehe");
        this.node.destroy();
    },
    _randomInt: function _randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    _randomFloat: function _randomFloat(min, max) {
        return Math.random() * (max - min) + min;
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
        //# sourceMappingURL=Target.js.map
        