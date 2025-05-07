
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
        playerAttack: _random(10,20),
        playerDefense: _random(5,15),
        playerEnergy: 50,
    },
    
    onLoad(){
        this.nameLb.string = this.playerName;
        this.hpLb.string = "HP: " + this.playerHP;
        this.atkLb.string = "ATK: " + this.playerAttack;
        this.defLb.string = "Def: " + this.playerDefense;
        this.energyLb.string = "Energy: " + this.playerEnergy;
    },

    onChargeEnergy(){
        this.playerEnergy = Math.min(this.playerEnergy + 20, 100);
        this.energyLb.string = "Energy: " + this.playerEnergy;
        
    }
});
