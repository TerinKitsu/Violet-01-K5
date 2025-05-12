cc.Class({
    extends: cc.Component,
    
    properties: {
        image: cc.Sprite,
        quantityLb: cc.Label
    },

    onLoad(){
        this.node.on("INIT_DATA", this.initData, this);
        // this.node.on("ON_CLICK", this.onClick, this);
        // this.node.newItemComp = this;
    },

    initData(data){
        const{image, quantity} = data;
        this.image.spriteFrame = image;
        this.quantityLb.string = quantity;
        this.data = data;
    },

    onClick(){
        const customeEvent = new cc.Event.EventCustom('ON_ITEM_CLICK', true);
        customeEvent.setUserData({
            itemData: this.data,
        })

        this.node.dispatchEvent(customeEvent);
        // tthis.node.dispatchEvent( new cc.Event.EventCustom('ON_ITEM_CLICK', true)); có thể khai báo như vầy nếu không tạo customeEvent như trên
    },

    onUse(){
        const customeEvent = new cc.Event.EventCustom('ON_ITEM_USE', true);
        customeEvent.setUserData({
            itemData: this.data,
        })

        this.node.dispatchEvent(customeEvent);
        // tthis.node.dispatchEvent( new cc.Event.EventCustom('ON_ITEM_CLICK', true)); có thể khai báo như vầy nếu không tạo customeEvent như trên
    },

    onDestroy(){
        this.node.off("INIT_DATA", this.initData, this);
    },
});
