

cc.Class({
    extends: cc.Component,

    properties: {
        context: cc.Label,
        startBtn: cc.Button,
        exitBtn: cc.Button,
    },

    onLoad () {
    },

    start () {
        this.context; 
    },

    // update (dt) {},
    onClickStart(){
        this.context.string = "Game is loading...";
        this.context; 
    },
    onClickExit(){
        this.context.string = "Goodbye";
        this.context; 
    },
});
