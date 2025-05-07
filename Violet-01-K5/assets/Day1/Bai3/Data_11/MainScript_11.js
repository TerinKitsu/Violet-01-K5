

cc.Class({
    extends: cc.Component,

    properties: {
        hpView: cc.Label,
        scoreView: cc.Label,
        button: cc.Button,
    },

    onLoad () {
        this.name = "Violet";
        this.hp = 0;
        this.score = 0;
    },

    start () {
        this.hpView.string = "HP: " + this.hp;
        this.scoreView.string = "Score: " + this.score;  
    },

    // update (dt) {},
    onClick(){
        this.score ++;
        if(this.score % 10 == 0){
            this.hp ++;
        }
        this.hpView.string = "HP: " + this.hp;
        this.scoreView.string = "Score: " + this.score;  
    }
});
