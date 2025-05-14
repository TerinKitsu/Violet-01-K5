cc.Class({
    extends: cc.Component,

    properties: {
        logLabel: cc.Label,  // Gắn label từ Editor để hiển thị kết quả
    },

    // Hàm chạy đầu tiên khi Node được load
    onLoad() {
        this.logServerTimeLatency();
    },

    // ✅ Hàm chính - gọi 10 lần để đo độ trễ
    async logServerTimeLatency() {
        let startTime = await this.getServerTime(); // Gọi lần đầu để lấy mốc ban đầu

        for (let i = 0; i < 10; i++) {
            const currentTime = await this.getServerTime(); // Gọi lại thời gian từ server
            const latency = currentTime - startTime;        // Tính độ trễ giữa 2 lần gọi
            startTime = currentTime;                         // Cập nhật mốc thời gian mới

            const message = `🕒 Lần ${i + 1} - Độ trễ: ${latency}ms\n`;
            this.appendToLabel(message);                     // In kết quả lên màn hình

            await this.delay(1000);                          // Chờ 1 giây rồi tiếp tục
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
