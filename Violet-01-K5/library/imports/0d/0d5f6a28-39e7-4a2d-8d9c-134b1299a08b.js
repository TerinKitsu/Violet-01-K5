"use strict";
cc._RF.push(module, '0d5f6ooOedKLY2cE0sSmaCL', 'Item');
// Day3/Script_D3B1/Item.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        image: cc.Sprite,
        quantityLb: cc.Label
    },

    onLoad: function onLoad() {
        this.node.on("INIT_DATA", this.initData, this);
        // this.node.on("ON_CLICK", this.onClick, this);
        // this.node.newItemComp = this;
    },
    initData: function initData(data) {
        var image = data.image,
            quantity = data.quantity;

        this.image.spriteFrame = image;
        this.quantityLb.string = quantity;
        this.data = data;
    },
    onClick: function onClick() {
        var customeEvent = new cc.Event.EventCustom('ON_ITEM_CLICK', true);
        customeEvent.setUserData({
            itemData: this.data
        });

        this.node.dispatchEvent(customeEvent);
        // tthis.node.dispatchEvent( new cc.Event.EventCustom('ON_ITEM_CLICK', true)); có thể khai báo như vầy nếu không tạo customeEvent như trên
    },
    onUse: function onUse() {
        var customeEvent = new cc.Event.EventCustom('ON_ITEM_USE', true);
        customeEvent.setUserData({
            itemData: this.data
        });

        this.node.dispatchEvent(customeEvent);
        // tthis.node.dispatchEvent( new cc.Event.EventCustom('ON_ITEM_CLICK', true)); có thể khai báo như vầy nếu không tạo customeEvent như trên
    },
    onDestroy: function onDestroy() {
        this.node.off("INIT_DATA", this.initData, this);
    }
});

cc._RF.pop();