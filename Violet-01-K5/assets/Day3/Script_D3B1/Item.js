
cc.Class({
    extends: cc.Component,

    properties: {
        name: "", 
        quantility: 0, 
        type: "",
        effect: "",

        inventoryManager: cc.Component,
    },

    onLoad () {
        let inventoryManagerNode = cc.find("InventoryManage");
        if (inventoryManagerNode) {
            this.inventoryManager = inventoryManagerNode.getComponent("InventoryManage");
        }

        //Click on Item to show info
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            this.inventoryManager.showInfoItem(this.name, this.quantility, this.type, this.effect, this.node);
        }, this);
    },

    initItem(name, quantility, type, effect){
        this.name = name;
        this.quantility = quantility;
        this.type = type;
        this.effect = effect;
    },
});
