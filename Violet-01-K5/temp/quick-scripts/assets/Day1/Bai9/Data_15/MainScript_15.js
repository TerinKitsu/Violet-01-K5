(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day1/Bai9/Data_15/MainScript_15.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6b43aMe/VFEIbcF1IFQqe1w', 'MainScript_15', __filename);
// Day1/Bai9/Data_15/MainScript_15.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        changeBtn: cc.Button,
        stateLb: cc.Label
    },

    onLoad: function onLoad() {
        this.state = "";
    },
    start: function start() {
        this.stateLb.string = this.state;
    },
    onChangeClicked: function onChangeClicked() {
        if (this.state == "") {
            this.state = "Idle";
            this.stateLb.string = this.state;
        }
        if (this.state == "Idle") {
            this.state = "Running";
            this.stateLb.string = this.state;
        } else {
            this.state = "Idle";
            this.stateLb.string = this.state;
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
        //# sourceMappingURL=MainScript_15.js.map
        