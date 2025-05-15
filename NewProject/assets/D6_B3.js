cc.Class({
    extends: cc.Component,

    properties: {
        logLabel: cc.Label,
        imageNode: cc.Node, 
    },

    async onLoad() {
        await this.downloadAssetsSequentially();
    },

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    async fetchAsset(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Fetch failed");
            const blob = await response.blob();
            this.appendLog(`✔️ Đã tải: ${url}`);
            return blob;
        } catch (err) {
            this.appendLog(`❌ Lỗi khi tải: ${url}`);
            return null;
        }
    },

    async downloadAssetsSequentially() {
        const urls = [
            'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ',
            'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g'
        ];

        for (let i = 0; i < urls.length; i++) {
            const blob = await this.fetchAsset(urls[i]);
            if (blob) {
                const texture = await this.convertBlobToTexture(blob);
                this.imageNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            }
            await this.delay(2000);
        }

        this.appendLog("Đã tải xong toàn bộ ảnh.");
    },

    convertBlobToTexture(blob) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                const texture = new cc.Texture2D();
                texture.initWithElement(img);
                texture.handleLoadedTexture();
                resolve(texture);
            };
            img.onerror = reject;
            img.src = URL.createObjectURL(blob);
        });
    },

    appendLog(text) {
        this.logLabel.string += text + "\n";
    }
});
