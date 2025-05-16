(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day2/Bai1/Data_21/Player_D2B1.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3e98cEjQ95HnLFfmLQyQuGo', 'Player_D2B1', __filename);
// Day2/Bai1/Data_21/Player_D2B1.js

"use strict";

function _random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
cc.Class({
    extends: cc.Component,

    properties: {
        nameLb: cc.Label,
        hpLb: cc.Label,
        atkLb: cc.Label,
        defLb: cc.Label,
        energyLb: cc.Label,
        playerImg: cc.Node,

        playerName: "Violet",
        playerHP: 100,
        playerAttack: _random(10, 20),
        playerDefense: _random(5, 15),
        playerEnergy: 50
    },

    onLoad: function onLoad() {
        this.nameLb.string = this.playerName;
        this.hpLb.string = "HP: " + this.playerHP;
        this.atkLb.string = "ATK: " + this.playerAttack;
        this.defLb.string = "Def: " + this.playerDefense;
        this.energyLb.string = "Energy: " + this.playerEnergy;
    },
    onChargeEnergy: function onChargeEnergy() {
        this.playerEnergy = Math.min(this.playerEnergy + 20, 100);
        this.energyLb.string = "Energy: " + this.playerEnergy;
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
        //# sourceMappingURL=Player_D2B1.js.map
        