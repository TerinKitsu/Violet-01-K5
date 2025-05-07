

cc.Class({
    extends: cc.Component,

    properties: {
        hpBox: cc.EditBox,
        manaBox: cc.EditBox,
        sumBtn: cc.Button,
        sumLb: cc.Label,
    },

    onload () {
        this.sum = 0;
    },

    start () {
        this.sumLb.string = this.sum;
    },

    onSumClick(){
        this.sum = parseInt(this.hpBox.string) * parseInt(this.manaBox.string);
        this.sumLb.string = this.sum;
    }
});
