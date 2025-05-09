cc.Class({
    extends: cc.Component,

    properties: {
        score: 1,
        scoreLb: cc.Label,
    },
    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
    },

    start () {
        this.score = this._randomInt(1, 10);
        this.scoreLabel.string = this.score;

        let timeLife = this._randomFloat(1, 2);
        this.scheduleOnce(() => {
            this.onMiss();
        }, timeLife);
    },

    onMiss(){
        let event = new cc.Event.EventCustom("Target_Clicked", true);
        event.detail = {score: 0};
        this.node.dispatchEvent(event);
        this.node.destroy();
    },
    
    onMiss(){
        let event = new cc.Event.EventCustom("Target_Clicked", true);
        event.detail = {score: this.score};
        this.node.dispatchEvent(event);
        this.node.destroy();
    },

    _randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    _randomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
});
