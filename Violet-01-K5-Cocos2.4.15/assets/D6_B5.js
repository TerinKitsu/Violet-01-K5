cc.Class({
    extends: cc.Component,

    properties: {
        logLabel: cc.Label,  
    },

    // Hàm chạy đầu tiên khi Node được load
    onLoad() {
        this.logServerTimeLatency();
    },

    //Gọi 10 lần để đo độ trễ
    async logServerTimeLatency() {
        let startTime = await this.getServerTime(); // Lấy mốc thời gian ban đầu

        for (let i = 0; i < 10; i++) {
            const currentTime = await this.getServerTime(); // Gọi lại thời gian từ server
            const latency = currentTime - startTime;        // Tính độ trễ giữa 2 lần gọi
            startTime = currentTime;                         // Cập nhật mốc thời gian mới
            //const message1 = `🕒 Lần ${i + 1} - Hiện tại: ${currentTime}ms\n`;
            const message = `🕒 Lần ${i + 1} - Độ trễ: ${latency}ms\n\n`;

            //this.appendToLabel(message1);                     
            this.appendToLabel(message);

            await this.delay(1000);                          // Chờ 1 giây rồi tiếp tục in this.appendToLable
        }
    },
    // ✅ Hàm hỗ trợ - lấy thời gian từ server
    async getServerTime() {
        try {
            const response = await fetch(window.location.href, { method: 'HEAD' });
            const serverDate = response.headers.get("Date");
            return new Date(serverDate).getTime();
        } catch (err) {
            console.warn("Không lấy được giờ server, dùng giờ máy.");
            return Date.now(); // fallback nếu lỗi
        }
    },

    // ✅ Hàm hỗ trợ - tạo delay bằng Promise
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    // ✅ Hàm hỗ trợ - ghi nội dung mới vào Label
    appendToLabel(text) {
        this.logLabel.string += text;
    }
});
