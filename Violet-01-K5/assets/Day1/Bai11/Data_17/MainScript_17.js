

cc.Class({
    extends: cc.Component,

    properties: {
        addBtn: cc.Button,
        showBtn: cc.Button,
    },



    onLoad () {
        this.item = ["Sword", "Shield", "Bow", "Axe", "Spear"];
    },

    onAddClicked(){
        this.item.push("New Item Added");
    },

    onShowClicked(){
        console.log(this.item);
    },
});
