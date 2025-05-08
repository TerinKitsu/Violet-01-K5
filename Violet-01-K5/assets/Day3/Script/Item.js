
cc.Class({
    extends: cc.Component,

    properties: {
        img: cc.Sprite,
        quantilityLb: cc.Label,
    },
    init (itemData, onClickCallBack){
        this.itemData = itemData;
        this.quantilityLb.string = "x " + itemData.quantility;
        this.icon.spriteFrame = itemData.sprite;

        this.node.on("Click",()=>{
            onClickCallBack(this.itemData);
        });
    }
});
