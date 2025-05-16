"use strict";
cc._RF.push(module, '3556dV2g09K1paBXy0Q5Ege', 'D5_Bai13');
// Day5/D5_Bai13.js

"use strict";

//const asyncFuncs = [func1, func2, func3];

function asyncFunc1() {
    return new Promise(function (resolve) {
        console.log("Started asyncFunc1");
        setTimeout(function () {
            console.log("Completed asyncFunc1");
            resolve(1);
        }, 1000);
    });
}

function asyncFunc2() {
    return new Promise(function (resolve) {
        console.log("Started asyncFunc2");
        setTimeout(function () {
            console.log("Completed asyncFunc2");
            resolve(2);
        }, 1000);
    });
}

function asyncFunc3() {
    return new Promise(function (resolve) {
        console.log("Started asyncFunc3");
        setTimeout(function () {
            console.log("Completed asyncFunc3");
            resolve(3);
        }, 1000);
    });
}

function runSequentially(funcs) {
    return funcs.reduce(function (prevPromise, currentFunc) {
        return prevPromise.then(function () {
            return currentFunc();
        });
    }, Promise.resolve());
}

runSequentially([asyncFunc1, asyncFunc2, asyncFunc3]).then(function () {
    console.log("All functions completed in sequence.");
});

cc._RF.pop();