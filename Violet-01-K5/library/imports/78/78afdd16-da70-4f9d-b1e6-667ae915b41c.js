"use strict";
cc._RF.push(module, '78afd0W2nBPnbHmZnrpFbQc', 'GameControl');
// Day2/Bai1/Data_21/GameControl.js

'use strict';

//Quản lý lượt(khi nào biết là user đang đánh và khi lượt của quái thì user không được spam kỹ năng)
//Máu ko được âm
//Thanh energy đầy sẽ không cho spam nút charge hoặc sẽ không mất lượt user khi spam energy
//Random HP và def mỗi khi tấn công thay vì random cố định khi bắt đầu trò chơi
cc.Class({
    extends: cc.Component,

    properties: {
        playerNode: cc.Node,
        enemyNode: cc.Node,
        notify: cc.Label,
        gameEnd: cc.Node,
        chargeBtn: cc.Button
    },

    onLoad: function onLoad() {
        this.player = this.playerNode.getComponent('Player_D2B1');
        this.enemy = this.enemyNode.getComponent('Enemy_D2B1');
        this.isGameOver = false;

        this.playerSprite = this.player.playerImg;
        this.enemySprite = this.enemy.enemyImg;
    },
    start: function start() {

        this.notify.string = "";
    },
    update: function update(dt) {
        this.player.playerEnergy == 100 ? this.chargeBtn.interactable = false : this.chargeBtn.interactable = true;
    },
    onClickAttack: function onClickAttack() {
        this.playerAttack("attack");
    },
    onClickSkill: function onClickSkill() {
        this.playerAttack("skill");
    },
    onClickCharge: function onClickCharge() {
        // this.playerAttack("charge");
        this.player.onChargeEnergy();
        this.player.energyLb.string = "Energy: " + this.player.playerEnergy;
    },
    playerAttack: function playerAttack(type) {
        var _this = this;

        if (this.isGameOver) return;

        var damage = 0;

        if (type === "attack") {

            damage = Math.max(0, this.player.playerAttack - this.enemy.enemyDefense);
            this.enemy.enemyHP -= damage;
            this.enemy.hpLb.string = "HP: " + this.enemy.enemyHP;
        } else if (type === "skill") {
            if (this.player.playerEnergy >= 30) {
                damage = Math.max(0, this.player.playerAttack * 2 - this.enemy.enemyDefense);
                this.enemy.enemyHP -= damage;
                this.player.playerEnergy -= 30;
                this.enemy.hpLb.string = "HP: " + this.enemy.enemyHP;
                this.player.energyLb.string = "Energy: " + this.player.playerEnergy;
            } else {
                return;
            }
        }
        // else if (type === "charge") {
        //     this.player.onChargeEnergy();
        //     this.player.hpLb.string = "HP: " + this.player.playerHP;
        // }

        if (this.enemy.enemyHP <= 0) {
            this.enemy.enemyHP = 0;
            this.isGameOver = true;
            this.gameEnd.active = true;
            this.notify.string = "You Win";
            return;
        }

        this.scheduleOnce(function () {
            return _this.enemyTurn();
        }, 1);
    },
    enemyTurn: function enemyTurn() {
        if (this.isGameOver) return;

        var damage = Math.max(0, this.enemy.enemyAttack - this.player.playerDefense);
        this.player.playerHP -= damage;
        this.player.hpLb.string = "HP: " + this.player.playerHP;

        if (this.player.playerHP <= 0) {
            this.player.playerHP = 0;
            this.isGameOver = true;
            this.gameEnd.active = true;
            this.notify.string = "You Lose";
        }
    }
});

cc._RF.pop();