
cc.Class({
    extends: cc.Component,

    properties: {
        nameLb: cc.Label,
        quantilityLb: cc.Label,
        typeLb: cc.Label,
        effecLb: cc.Label,
        noityLb: cc.Label,

        infoPanel: cc.Node,
        itemNode: cc.Node,
        layoutItems: cc.Node,

        itemPrefabs: {
            default: [],
            type: [cc.Prefab] 
        },

        
    },
    //Crate Object
    onLoad () {
        this.itemsData = [
            {
                prefabIndex: 0,
                name: "Sword",
                quantility: 1,
                type: "Equipment",
                effect: "+10 ATK"
            },
            {
                prefabIndex: 1,
                name: "Shield",
                quantility: 1,
                type: "Equipment",
                effect: "+10 DEF"
            },
            {
                prefabIndex: 2,
                name: "Mint",
                quantility: 7,
                type: "Craft",
                effect: "This must do something right?"
            },
            {
                prefabIndex: 3,
                name: "Potion",
                quantility: 20,
                type: "Consumable",
                effect: "+50 HP"
            },
            {
                prefabIndex: 4,
                name: "Rose",
                quantility: 20,
                type: "Craft",
                effect: "It's smell lovely"
            },
        ];
    },

    start () {
        //this.infoPanel.active = false;

        this.loadItems();
    },


    //Load Item Prefab
    loadItems() {
        this.itemsData.forEach((item) => { 
            let itemPrefab = this.itemPrefabs[item.prefabIndex];
            let newItem = cc.instantiate(itemPrefab);
            newItem.parent = this.layoutItems;
    
            let itemScript = newItem.getComponent("Item");
            if (itemScript) {
                itemScript.initItem(item.name, item.quantility, item.type, item.effect); 
            }
        });
    },

    useItem(){
        let item = this.itemNode.getComponent("Item");
        if(item.type == "Consumable"){
            item.quantility--;
            if(item.quantility <= 0)
                this.removeItem();
        }
        else if(item.type == "Equipment"){
            this.removeItem();
            this.noityLb.string = "Equiped " + item.itemName;
            this.scheduleOnce(() => {
                this.noityLb.node.active = true;
            }, 0.2);
            this.scheduleOnce(() => {
                this.noityLb.node.active = false;
            }, 3);
        }
        this.updateUI(item.name, item.quantility, item.type, item.effect);
    },

    updateUI(name, quantility, type, effect){
        this.nameLb.string = name;
        this.quantilityLb.string = quantility;
        this.typeLb.string = type;
        this.effecLb.string = effect;
    },
    

    showInfoItem(name, quantility, type, effect, itemNode){
        this.updateUI(name, quantility, type, effect);
        this.infoPanel.active = true;
        this.itemNode = itemNode;
    },

    removeItem(){
        this.itemNode.destroy();
        this.infoPanel.active = false;
    },
});
