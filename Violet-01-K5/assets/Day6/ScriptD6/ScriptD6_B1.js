async function getServerTimeAsync() {
    try {
        const response = await fetch(window.location.href, {
            method: 'HEAD'
        });

        const serverDate = response.headers.get("Date");
        if (!serverDate) throw new Error("No Date header received");

        return new Date(serverDate).getTime(); // Trả về timestamp (milliseconds)
    } catch (error) {
        console.error("Failed to get server time:", error);
        return null;
    }
}

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.updateServerTime();
    },

    async updateServerTime() {
        const timestamp = await getServerTimeAsync();
        if (timestamp !== null) {
            const date = new Date(timestamp);
            const formattedTime = date.toLocaleString(); // hoặc toISOString()
            this.serverTimeLabel.string = "🕒 Server Time: " + formattedTime;
        } else {
            this.serverTimeLabel.string = "❌ Failed to get server time";
        }
    }
});
