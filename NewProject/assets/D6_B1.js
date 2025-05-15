async function getServerTimeAsync() {
    try {
        const response = await fetch(window.location.href, {
            method: 'HEAD'
        });

        const dateHeader = response.headers.get("Date");

        if (!dateHeader) {
            throw new Error("Date header not found");
        }

        return new Date(dateHeader).getTime(); // Trả về timestamp (milliseconds)
    } catch (error) {
        console.error("Failed to get server time:", error);
        return null; // hoặc bạn có thể trả về Date.now() như fallback
    }
}

cc.Class({
    extends: cc.Component,

    properties: {
        timeLabel: cc.Label,
    },

    onLoad() {
        this.updateServerTime();
    },

    async updateServerTime() {
        const serverTime = await getServerTimeAsync();
        if (serverTime) {
            const timeStr = new Date(serverTime).toLocaleString();
            this.timeLabel.string = "🕒 Server Time: " + timeStr;
        } else {
            this.timeLabel.string = "❌ Không thể lấy giờ từ server.";
        }
    }
});

// cc.Class({
//     extends: cc.Component,

//     properties: {
//         label: cc.Label, // gán label từ Editor để hiển thị kết quả
//     },

//     // Hàm này chạy khi node được khởi tạo
//     async start() {
//         try {
//             const time = await this.getServerTime(); // Gọi hàm bất đồng bộ
//             this.label.string = 'Server Time (ms): ' + time; // Hiển thị thời gian server
//         } catch (e) {
//             this.label.string = 'Lỗi: ' + e.message;
//         }
//     },

//     // Hàm bất đồng bộ lấy thời gian từ server
//     async getServerTime() {
//         return new Promise((resolve, reject) => {
//             let xmlHttp;
//             try {
//                 xmlHttp = new XMLHttpRequest(); // Tạo XMLHttpRequest
//                 xmlHttp.open('HEAD', window.location.href.toString(), true); // Gửi request dạng HEAD
//                 xmlHttp.setRequestHeader('Content-Type', 'text/html');

//                 // Khi request xong
//                 xmlHttp.onreadystatechange = function () {
//                     if (xmlHttp.readyState === 4) {
//                         if (xmlHttp.status === 200) {
//                             const date = xmlHttp.getResponseHeader("Date");
//                             resolve(new Date(date).getTime()); // Trả về thời gian
//                         } else {
//                             reject(new Error("Không lấy được thời gian từ server"));
//                         }
//                     }
//                 };

//                 xmlHttp.send(null); // Gửi request
//             } catch (err) {
//                 reject(err); // Báo lỗi nếu không hỗ trợ XMLHttpRequest
//             }
//         });
//     }
// });
