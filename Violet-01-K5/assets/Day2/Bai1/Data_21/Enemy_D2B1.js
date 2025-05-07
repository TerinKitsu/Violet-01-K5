
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
        enemyAttack: _random(10,20),
        enemyDefense: _random(5,15),
        enemyEnergy: 50,
    },

    onLoad(){
        this.nameLb.string = this.enemyName;
        this.hpLb.string = "HP: " + this.enemyHP;
        this.atkLb.string = "ATK: " + this.enemyAttack;
        this.defLb.string = "Def: " + this.enemyDefense;
        this.energyLb.string = "Energy: " + this.enemyEnergy;

        this.baseHP = this.enemyHP;
    },

    onChargeEnergy(){
        if(this.enemyHP <= this.baseHP)
            this.enemyEnergy += _random(5,20);
        this.energyLb.string = "Energy: " + this.enemyEnergy;
    }
});
