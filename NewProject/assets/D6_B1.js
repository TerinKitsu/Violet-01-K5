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

// async function showServerTime() {
//     const serverTime = await getServerTimeAsync();

//     if (serverTime) {
//         const date = new Date(serverTime);
//         console.log("⏰ Server Time:", date.toLocaleString());
//     } else {
//         console.log("❌ Không thể lấy thời gian từ server");
//     }
// }

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
