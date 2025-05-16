cc.Class({
    extends: cc.Component,

    properties: {
        titleLabel: cc.Label,
        bodyLabel: cc.Label,
    },

    // Hàm được gọi khi component load xong
    onLoad() {
        // const URL = "https://jsonplaceholder.typicode.com/posts/1"; //Hoạt động bình thường
        const URL = "https://jsonplaceholder.typicode.com/posts/9999999999999999"; //Network response 
        const TIMEOUT = 3000;

        this.fetchDataWithTimeout(URL, TIMEOUT)
            .then(data => {
                this.titleLabel.string = "Title: " + data.title;
                this.bodyLabel.string = "Body: " + data.body;
            })
            .catch(error => {
                this.titleLabel.string = "Error: " + error.message;
                this.bodyLabel.string = "";
            });
    },

    // Hàm fetch có timeout, tích hợp với AbortController nếu hết time out sẽ dừng các promise sau
    fetchDataWithTimeout(url, timeout) {
        return new Promise((resolve, reject) => {
            const controller = new AbortController();
            const signal = controller.signal;

            const timer = setTimeout(() => {
                controller.abort();
            }, timeout);

            fetch(url, { signal })
                .then(response => {
                    clearTimeout(timer);
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => {
                    if (error.name === 'AbortError') {
                        reject(new Error("Request timed out"));
                    } else {
                        reject(error);
                    }
                });
        });
    },
});

