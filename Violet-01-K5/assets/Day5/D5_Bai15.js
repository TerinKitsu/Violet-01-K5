async function asyncFunc1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("asyncFunc1 done");
            resolve("Kết quả từ asyncFunc1");
        }, 3000); // 3 giây mới hoàn tất
    });
}

async function asyncFunc2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("asyncFunc2 done");
            resolve("Kết quả từ asyncFunc2");
        }, 2000); // 2 giây
    });
}

async function asyncFunc3() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            console.log("asyncFunc3 failed");
            reject("Lỗi từ asyncFunc3");
        }, 1000); // Bị lỗi sau 1 giây
    });
}

function timeoutFunc(timeout = 2500) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Timeout: Out of time");
        }, timeout);
    });
}

const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3];
const timeLimit = 2500;

const promiseArr = [
    ...asyncArr.map(fn => fn()), 
    timeoutFunc(timeLimit)    
];

Promise.race(promiseArr)
    .then(result => console.log("Success: ", result))
    .catch(error => console.log("Fail: ", error));