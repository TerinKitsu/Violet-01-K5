(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day2/Bai1/Data_21/Enemy_D2B1.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6499botGsZIFq7etOwPQqhb', 'Enemy_D2B1', __filename);
// Day2/Bai1/Data_21/Enemy_D2B1.js

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
        enemyImg: cc.Node,

        enemyName: "One Eye Monster",
        enemyHP: 100,
        enemyAttack: _random(10, 20),
        enemyDefense: _random(5, 15),
        enemyEnergy: 50
    },

    onLoad: function onLoad() {
        this.nameLb.string = this.enemyName;
        this.hpLb.string = "HP: " + this.enemyHP;
        this.atkLb.string = "ATK: " + this.enemyAttack;
        this.defLb.string = "Def: " + this.enemyDefense;
        this.energyLb.string = "Energy: " + this.enemyEnergy;

        this.baseHP = this.enemyHP;
    },
    onChargeEnergy: function onChargeEnergy() {
        if (this.enemyHP <= this.baseHP) this.enemyEnergy += _random(5, 20);
        this.energyLb.string = "Energy: " + this.enemyEnergy;
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
        //# sourceMappingURL=Enemy_D2B1.js.map
        