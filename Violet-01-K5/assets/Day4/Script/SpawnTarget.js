
cc.Class({
    extends: cc.Component,

    properties: {
        targetPrefap: cc.Prefab,
        gameControler: cc.Node,
    },

    onLoad () {
        this.node.on("Target_Clicked", this.onTargetSpawn, this)

        //Get window scale
        this.width = cc.winSize.width;
        this.height = cc.winSize.height;
        this.halfW = this.width / 2;
        this.halfH = this.height / 2;
    },

    onDestroy(){
        this.node.off("Target_Clicked", this.onTargetSpawn, this);
    },


    start () {
        this.spawn();
    },

    onTargetSpawn(event){
        let score = event.detail.score;
        this.gameControler.sumScore(score);
        this.spawn();
    },

    spawn(){
        // if(this.gameControler.isGameOverReturn()){
        //      this.node.off("Target_Clicked", this.onTargetSpawn, this);
        //      return;
        // }
        //cc.log("AA");
        let newTarget = cc.instantiate(this.targetPrefap);
        this.randomPotison();
        
        newTarget.parent = this.node;
        newTarget.setPotision(this.x, this.y);
        
    },

    randomPotison(){
        this.x = (Math.random() * this.width) - this.halfW;
        this.y = (Math.random() * this.height) - this.halfH;
    }  
});
