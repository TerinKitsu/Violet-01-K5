function asyncFunc1() {
    return new Promise((resolve, reject) => {
        console.log("Started asyncFunc1");
        setTimeout(() => {
            console.log("Completed asyncFunc1");
            resolve("Result 1");
        }, 1000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        console.log("Started asyncFunc2");
        setTimeout(() => {
            console.log("Failed asyncFunc2");
            reject("Error in asyncFunc2");
        }, 1000);
    });
}

function asyncFunc3() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc3");
        setTimeout(() => {
            console.log("Completed asyncFunc3");
            resolve("Result 3");
        }, 1000);
    });
}

asyncFunc1()
    .then((result1) => {
        console.log("Result from asyncFunc1:", result1);
        return asyncFunc2();
    }, (error1) => {
        console.error("Error in asyncFunc1:", error1);
        return asyncFunc2(); // vẫn tiếp tục chuỗi
    })
    .then((result2) => {
        console.log("Result from asyncFunc2:", result2);
        return asyncFunc3();
    }, (error2) => {
        console.error("Error in asyncFunc2:", error2);
        return asyncFunc3(); // vẫn tiếp tục chuỗi
    })
    .then((result3) => {
        console.log("Result from asyncFunc3:", result3);
    }, (error3) => {
        console.error("Error in asyncFunc3:", error3);
    });
