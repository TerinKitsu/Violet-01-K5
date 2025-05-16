"use strict";
cc._RF.push(module, '7ad20KlgTVDRa5UhcDAKhDU', 'MainScript_17');
// Day1/Bai11/Data_17/MainScript_17.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        addBtn: cc.Button,
        showBtn: cc.Button
    },

    onLoad: function onLoad() {
        this.item = ["Sword", "Shield", "Bow", "Axe", "Spear"];
    },
    onAddClicked: function onAddClicked() {
        this.item.push("New Item Added");
    },
    onShowClicked: function onShowClicked() {
        console.log(this.item);
    }
});

cc._RF.pop();