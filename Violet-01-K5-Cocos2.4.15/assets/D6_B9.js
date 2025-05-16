cc.Class({
    extends: cc.Component,

    properties: {
        logLabel: cc.Label
    },

    async onLoad() {
        // Tạo circuit breaker từ getServerTime trong 2 giây
        this.getTimeLimited = await this.circuitBreaker(this.getServerTime, 2000);

        // Gọi sớm trước threshold
        setTimeout(async () => {
            const result = await this.getTimeLimited();
            this.appendLog(`Gọi sau 300ms: ${result}`);
        }, 300);

        setTimeout(async () => {
            const result = await this.getTimeLimited();
            this.appendLog(`Gọi sau 1000ms: ${result}`);
        }, 1000);

        // Gọi trễ sau threshold
        setTimeout(async () => {
            const result = await this.getTimeLimited();
            this.appendLog(`Gọi sau 2100ms: ${result}`);
        }, 2100);

        setTimeout(async () => {
            const result = await this.getTimeLimited();
            this.appendLog(`Gọi sau 2300ms: ${result}`);
        }, 2300);
    },

    // Tạo hàm circuitBreaker bắt sự kiện timeout
    async circuitBreaker(fn, timeThreshold) {
        let state = "Close";
        setTimeout(() => { 
            state = "Open"; 
        }, timeThreshold);

        return async function () {
            if (state === "Open") {
                return "service closed";
            } 
            else {
                return await fn();
            }
        };
    },

    //Hàm lấy thời gian từ server
    async getServerTime() {
        try {
            const response = await fetch(window.location.href, { 
                method: 'HEAD' 
            });
            const serverDate = response.headers.get("Date");
            return new Date(serverDate).getTime();
        } catch (err) {
            return Date.now(); 
        }
    },
   
    appendLog(text) {
        this.logLabel.string += text + "\n";
    }
});
