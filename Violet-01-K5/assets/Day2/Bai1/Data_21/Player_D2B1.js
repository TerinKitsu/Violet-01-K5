// ## Bài tập

// - Tạo hai đối tượng `player` và `enemy` với các thuộc tính:
//   - `health`: 100.
//   - `attack`: Ngẫu nhiên từ 10 đến 20.
//   - `defense`: Ngẫu nhiên từ 5 đến 15.
//   - `energy`: 50.

// - Lượt Tấn Công:
//   - Người chơi chọn một trong ba hành động:
//     - Attack: Gây sát thương = `attack - defense`.
//     - Skill: Nếu `energy >= 30`, gây sát thương gấp đôi và trừ 30 năng lượng.
//     - Recover energy: +20 năng lượng (tối đa 100).
//   - Sau đó, đối phương tự động tấn công.

// - Kết Thúc Trò Chơi:
//   - Trò chơi kết thúc khi máu của `player` hoặc `enemy` cạn.
//   - Hiển thị người chiến thắng.



function _random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
cc.Class({
    extends: cc.Component,

    properties: {
        nameLb: cc.Label,
        hpLb: cc.Label,
        atkLb: cc.Label,
        defLb: cc.Label,
        energyLb: cc.Label,

        playerName: "Violet",
        playerHP: 100,
        playerAttack: _random(10,20),
        playerDefense: _random(5,10),
        playerEnergy: 50,
    },
    onLoad(){
        this.nameLb.string = this.playerName;
        this.hpLb.string = "HP: " + this.playerHP;
        this.atkLb.string = "ATK: " + this.playerAttack;
        this.defLb.string = "Def: " + this.playerDefense;
        this.energyLb.string = "Energy: " + this.playerEnergy;
    },
    update(dt){
        
    },
    onChargeEnergy(){
        this.playerEnergy = Math.min(this.playerEnergy + 20, 100);
        this.energyLb.string = "Energy: " + this.playerEnergy;
        
    }
});
