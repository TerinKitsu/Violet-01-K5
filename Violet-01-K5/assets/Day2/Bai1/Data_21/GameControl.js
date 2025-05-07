
cc.Class({
    extends: cc.Component,

    properties: {
        playerNode: cc.Node,
        enemyNode: cc.Node,
        notify: cc.Label,
        gameEnd: cc.Node,
    },

    onLoad () {
        this.player = this.playerNode.getComponent('Player_D2B1');
        this.enemy = this.enemyNode.getComponent('Enemy_D2B1');
        this.isGameOver = false;
    },

    start(){

        his.notify.string = "";
    },

    onClickAttack() {
        this.playerAttack("attack");
    },

    onClickSkill() {
        this.playerAttack("skill");
    },

    onClickCharge() {
        this.playerAttack("charge");
    },

    playerAttack(type) {
        if (this.isGameOver) return;

        let damage = 0;

        if (type === "attack") {
            damage = Math.max(0, this.player.playerAttack - this.enemy.enemyDefense);
            this.enemy.enemyHP -= damage;
            this.enemy.hpLb.string = "HP: " + this.enemy.enemyHP;
        } 
        else if (type === "skill") {
            if (this.player.playerEnergy >= 30) {
                damage = Math.max(0, (this.player.playerAttack * 2) - this.enemy.enemyDefense);
                this.enemy.enemyHP -= damage;
                this.player.playerEnergy -= 30;
                this.enemy.hpLb.string = "HP: " + this.enemy.enemyHP;
            } 
            else {
                return;
            }
        } 
        else if (type === "charge") {
            this.player.onChargeEnergy();
            this.player.hpLb.string = "HP: " + this.player.playerHP;
        }

        if (this.enemy.enemyHP <= 0) {
            this.enemy.enemyHP = 0;
            this.isGameOver = true;
            this.gameEnd.active = true;
            this.notify.string = "You Win";
            return;
        }

        this.scheduleOnce(() => this.enemyTurn(), 1); 
        
    },

    enemyTurn() {
        if (this.isGameOver) return;

        const damage = Math.max(0, this.enemy.enemyAttack - this.player.playerDefense);
        this.player.playerHP -= damage;
        this.player.hpLb.string = "HP: " + this.player.playerHP;
        

        if (this.player.playerHP <= 0) {
            this.player.playerHP = 0;
            this.isGameOver = true;
            this.gameEnd.active = true;
            this.notify.string = "You Lose";
        }
    },
});
