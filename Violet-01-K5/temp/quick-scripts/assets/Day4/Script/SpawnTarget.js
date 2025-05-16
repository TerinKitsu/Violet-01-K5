(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day4/Script/SpawnTarget.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '045e75sIqpFyohxcH2WbsrE', 'SpawnTarget', __filename);
// Day4/Script/SpawnTarget.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        targetPrefap: cc.Prefab,
        gameControler: cc.Node
    },

    onLoad: function onLoad() {
        this.node.on("Target_Clicked", this.onTargetSpawn, this);
        this.gameControl = this.gameControler.getComponent('GameController');
        //Get window scale
        this.width = cc.winSize.width - 200;
        this.height = cc.winSize.height - 200;
        this.halfW = this.width / 2;
        this.halfH = this.height / 2;
    },
    onDestroy: function onDestroy() {
        this.node.off("Target_Clicked", this.onTargetSpawn, this);
    },
    start: function start() {
        this.spawn();
    },
    onTargetSpawn: function onTargetSpawn(event) {
        var score = event.detail.score;
        this.gameControl.sumScore(score);
        this.spawn();
    },
    spawn: function spawn() {
        if (this.gameControl.isGameOverReturn()) {
            this.node.off("Target_Clicked", this.onTargetSpawn, this);
            return;
        }
        cc.log("AA");
        var newTarget = cc.instantiate(this.targetPrefap);
        this.randomPotison();

        newTarget.setPosition(this.x, this.y);
        newTarget.parent = this.node;
    },
    randomPotison: function randomPotison() {
        this.x = Math.random() * this.width - this.halfW;
        this.y = Math.random() * this.height - this.halfH;
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
        //# sourceMappingURL=SpawnTarget.js.map
        