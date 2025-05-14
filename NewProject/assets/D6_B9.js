cc.Class({
    extends: cc.Component,

    properties: {
        logLabel: cc.Label
    },

    async onLoad() {
        // 1. Tạo circuit breaker từ getServerTime trong 2 giây
        this.getTimeLimited = await this.circuitBreaker(this.getServerTime, 2000);

        // 2. Gọi sớm sau 300ms => ok
        setTimeout(async () => {
            const result = await this.getTimeLimited();
            this.appendLog(`Gọi sau 300ms: ${result}`);
        }, 300);

        // 3. Gọi trễ sau 2100ms => service closed
        setTimeout(async () => {
            const result = await this.getTimeLimited();
            this.appendLog(`Gọi sau 2100ms: ${result}`);
        }, 2100);
    },

    // ✅ Hàm circuitBreaker
    async circuitBreaker(fn, timeThreshold) {
        let isOpen = false;
        setTimeout(() => { 
            isOpen = true; 
        }, timeThreshold);

        return async function () {
            if (isOpen) {
                return "service closed";
            } 
            else {
                return await fn();
            }
        };
    },

    // ✅ Hàm lấy thời gian từ server
    async getServerTime() {
        try {
            const response = await fetch(window.location.href, { 
                method: 'HEAD' 
            });
            const serverDate = response.headers.get("Date");
            return new Date(serverDate).getTime();
        } catch (err) {
            return Date.now(); // fallback
        }
    },

    // ✅ Ghi log ra label
    appendLog(text) {
        this.logLabel.string += text + "\n";
    }
});
