

cc.Class({
    extends: cc.Component,

    properties: {
        changeBtn: cc.Button,
        stateLb: cc.Label,
    },

    onLoad () {
        this.state = "";
    },

    start () {
        this.stateLb.string = this.state;
    },

    onChangeClicked(){
        if(this.state == ""){
            this.state = "Idle";
            this.stateLb.string = this.state;
        }
        if(this.state == "Idle"){
            this.state = "Running";
            this.stateLb.string = this.state;
        }
        else{
            this.state = "Idle";
            this.stateLb.string = this.state;
        }
    }
});
