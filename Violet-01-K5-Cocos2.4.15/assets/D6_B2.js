cc.Class({
    extends: cc.Component,

    properties: {
        resultLabel: cc.Label,
    },

    onLoad() {
        this.tryFetch();
    },

    async tryFetch() {
        try {
            const result = await this.fetchWithAutoRetry(this.simulateAPICall, 3);
            this.resultLabel.string += "✅ Success: " + result;
        } catch (error) {
            this.resultLabel.string += "❌ All retries failed: " + error.message;
        }
    },

    async fetchWithAutoRetry(fetcher, maximumRetryCount = 5) {
        let attempt = 0;
        while (attempt < maximumRetryCount) {
            try {
                return await fetcher();
            } catch (error) {
                attempt++;
                if (attempt >= maximumRetryCount) {
                    throw new Error(`Failed after ${maximumRetryCount} attempts`);
                }
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
    },

    simulateAPICall() {
        return new Promise((resolve, reject) => {
            if (Math.random() < 0.5) {
                reject(new Error('API call failed'));
            } else {
                resolve('API call succeeded');
            }
        });
    },
});
