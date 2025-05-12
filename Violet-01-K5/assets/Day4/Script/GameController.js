
cc.Class({
    extends: cc.Component,

    properties: {
        totalScoreLb: cc.Label,
        timeLb: cc.Label,
        resultPage: cc.Node,
        finalScoreLb: cc.Label,
        pausePanel: cc.Node,

        isPaused: false,
    },

    onLoad () {
        this.resultPage.active = false;
        this.total = 0;
        this.time = 60;
        this.isGameOver = false;
    },

    start(){
        this.timeLb.string = "Time \n" + this.time;
        this.countTime();
    },

    isGameOverReturn(){
        return this.isGameOver;
    },

    sumScore(score){
        this.total += score;
        this.totalScoreLb.string = "Score: " + this.total;
    },

    countTime(){
        this.scheduleOnce(() =>{
            if(this.time <= 0){
                this.isGameOver = true;
                this.gameOverUI();
                return
            }
            this.time --;
            this.timeLb.string = "Time \n" + this.time;
            this.countTime();
        }, 1)
    },

    gameOverUI(){
        this.finalScoreLb.string = this.totalScoreLb.string;
        this.resultPage.active = true;
    },

    onRestartGame(){
        cc.director.loadScene("D4_B1");
        this.onResumeGame();
    },

    onPauseGame(){
        this.isPaused = !this.isPaused;
        this.pausePanel.active = this.isPaused;
        if(this.isPaused)
            cc.director.pause();
        else
            this.onResumeGame();
    },

    onResumeGame(){
        if(this.isPaused){
            this.isPaused = !this.isPaused;
            this.pausePanel.active = this.isPaused;
        }
        cc.director.resume();
    }
});
