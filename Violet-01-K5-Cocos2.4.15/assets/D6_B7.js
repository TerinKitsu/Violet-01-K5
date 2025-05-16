cc.Class({
    extends: cc.Component,

    properties: {
        logLabel: cc.Label, 
    },
    //Gọi đến class LazyMan theo hướng Chainning
    onLoad() {
        const logger = this.createLogger(); 
        const lazyMan = new LazyMan('jack', logger);
        lazyMan.eat('apple').sleep(2000).eat('hamburger').sleep(1000).eat('pear').sleep(7000).eat('grape').sleep(5000).eat('pie');
    },

    createLogger() {
        return (text) => {
            this.logLabel.string += text + '\n'; 
        };
    },
});

//Tạo class LazyMan có phương thức tương ứng
class LazyMan {
    constructor(name, logger = console.log) {
        this.name = name;
        this.tasks = [];
        this.logger = logger;

        this.tasks.push(() => {
            this.logger(`My name is ${this.name}`);
            return Promise.resolve();
        });

        setTimeout(() => {
            this.run();
        }, 0);
    }

    eat(food) {
        this.tasks.push(() => {
            this.logger(`I am eating ${food}`);
            return Promise.resolve();
        });
        return this;
    }

    sleep(ms) {
        this.tasks.push(() => {
            this.logger(`I am sleeping...`);
            return new Promise(resolve => {
                setTimeout(() => {
                    this.logger(`After ${ms / 1000} seconds`);
                    resolve();
                }, ms);
            });
        });
        return this;
    }

    async run() {
        for (const task of this.tasks) {
            await task();
        }
    }
}

