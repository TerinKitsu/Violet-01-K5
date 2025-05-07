

cc.Class({
    extends: cc.Component,

    properties: {
        hpLb: cc.Label,
        addBtn: cc.Button,
        resetBtn: cc.Button,
    },


    onLoad () {
        this.hp = 0;
    },

    start () {
        this.hpLb.sting = this.hp;
    },

    onAddClicked(){
        this.hp += 10;
        this.hpLb.string = this.hp;
    },
    onResetClicked(){
        this.hp = 0;
        this.hpLb.string = this.hp;
    }
});
