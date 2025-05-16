cc.Class({
    extends: cc.Component,

    properties: {
        label: cc.Label, // gán từ Editor
    },

    async start() {
        // Dùng promisify để chuyển getLocalTime và getServerTime thành hàm trả về Promise
        const localTime = await this.promisify(this.getLocalTime)();
        const serverTime = await this.promisify(this.getServerTime)();
        const latency = serverTime - localTime;

        this.label.string = `Local: ${localTime}\nServer: ${serverTime}\nĐộ trễ: ${latency}ms`;
    },

    // Công dụng của hàm Promisify là chuyển các hàm đồng bộ và bất đồng bộ thành Promise
    promisify(fn) {
        return (...args) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const result = await fn.apply(this, args);
                    resolve(result);
                } catch (e) {
                    reject(e);
                }
            });
        };
    },

    // Hàm đồng bộ: lấy thời gian local
    getLocalTime() {
        return new Date().getTime(); // Thời gian local
    },

    // Hàm bất đồng bộ: lấy thời gian server
    async getServerTime() {
        return new Promise((resolve, reject) => {
            let xmlHttp;
            try {
                xmlHttp = new XMLHttpRequest();
                xmlHttp.open('HEAD', window.location.href.toString(), true);
                xmlHttp.setRequestHeader('Content-Type', 'text/html');
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState === 4) {
                        if (xmlHttp.status === 200) {
                            const date = xmlHttp.getResponseHeader("Date");
                            resolve(new Date(date).getTime());
                        } else {
                            reject(new Error("Lỗi lấy thời gian server"));
                        }
                    }
                };
                xmlHttp.send(null);
            } catch (err) {
                reject(err);
            }
        });
    }
});
