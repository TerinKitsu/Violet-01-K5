
cc.Class({
    extends: cc.Component,

    properties: {
        itemName: "", 
        quantility: 0, 
        type: "",
        effect: "",

        inventoryManager: cc.Component,
    },

    onLoad () {
        let inventoryManageNode = cc.find("InventoryManage");
        if (inventoryManageNode) {
            this.inventoryManager = inventoryManageNode.getComponent("InventoryManage");
        }

        //Click on Item to show info
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            this.inventoryManager.showInfoItem(this.itemName, this.quantility, this.type, this.effect, this.node);
        }, this);
    },

    initItem(name, quantility, type, effect){
        this.name = name;
        this.quantility = quantility;
        this.type = type;
        this.effect = effect;
    },
});
