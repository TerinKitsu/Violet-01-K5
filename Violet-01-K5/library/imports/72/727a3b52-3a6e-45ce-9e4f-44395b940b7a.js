"use strict";
cc._RF.push(module, '727a3tSOm5Fzp5PRDlblAt6', 'InventoryManage');
// Day3/Script_D3B1/InventoryManage.js

"use strict";

var dataItem = cc.Class({
    name: "dataItem",
    properties: {
        keyItem: "",
        image: cc.SpriteFrame,
        nameItem: "",
        type: "",
        quantity: 0,
        effect: ""
    }
});

cc.Class({
    extends: cc.Component,

    properties: {
        holder: cc.Node,
        item: cc.Prefab,
        rightPanel: cc.Node,
        useBtn: cc.Node,
        dropBtn: cc.Node,
        messageLb: cc.Label,

        showImage: cc.Sprite,
        showName: cc.Label,
        showType: cc.Label,
        showQuantity: cc.Label,
        showEffect: cc.Label,

        listData: {
            default: [],
            type: dataItem
        }
    },

    currentItemNode: null,
    currentItemData: null,

    onLoad: function onLoad() {
        this.node.on("ON_ITEM_CLICK", this.itemClick, this);
        // this.node.on("ON_ITEM_USE", this.onUseItem, this);
    },
    start: function start() {
        for (var i = 0; i < this.listData.length; i++) {
            var data = this.listData[i];
            var item = cc.instantiate(this.item);
            item.parent = this.holder;
            // item.newItemComp.initData();
            item.emit("INIT_DATA", data);
        }
    },
    itemClick: function itemClick(event) {

        this.rightPanel.active = true;
        event.stopPropagation();
        var data = event.getUserData();

        cc.log(data.itemData.type == "Craft");
        data.itemData.type == "Craft" ? this.useBtn.active = false : this.useBtn.active = true;
        this.dropBtn.active = true;

        // cc.log("itemCLick", data);
        this.showImage.spriteFrame = data.itemData.image; //itemData lấy từ onClick của Item.JS
        this.showName.string = data.itemData.nameItem;
        this.showQuantity.string = data.itemData.quantity;
        this.showType.string = data.itemData.type;
        this.showEffect.string = data.itemData.effect;

        this.currentItemNode = event.target;
        this.currentItemData = data.itemData;
    },
    onUseItem: function onUseItem() {
        if (!this.currentItemNode || !this.currentItemData) return;

        var type = this.currentItemData.type;

        if (type === "Equipment") {
            this.showMessage("\u0110\xE3 trang b\u1ECB:  " + this.currentItemData.nameItem);
            this.currentItemNode.destroy();
            this.removeItemFromList(this.currentItemData.keyItem);
        } else if (type === "Consumable") {
            this.currentItemData.quantity--;
            if (this.currentItemData.quantity <= 0) {
                this.currentItemNode.destroy();
                this.removeItemFromList(this.currentItemData.keyItem);
            } else {
                this.currentItemNode.getComponent("Item").initData(this.currentItemData);
                this.showQuantity.string = this.currentItemData.quantity;
            }
        }
    },
    onDropItem: function onDropItem() {
        if (!this.currentItemNode || !this.currentItemData) return;

        this.currentItemNode.destroy();
        this.removeItemFromList(this.currentItemData.keyItem);
    },
    removeItemFromList: function removeItemFromList(key) {
        this.listData = this.listData.filter(function (item) {
            return item.keyItem !== key;
        });
        this.rightPanel.active = false;
    },
    showMessage: function showMessage(text) {
        var _this = this;

        this.messageLb.string = text;
        this.messageLb.node.active = true;

        // Hide Label after 1 second
        cc.tween(this.messageLb.node).delay(1).call(function () {
            _this.messageLb.node.active = false;
        }).start();
    }
});

cc._RF.pop();