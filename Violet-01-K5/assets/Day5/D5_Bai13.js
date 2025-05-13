//const asyncFuncs = [func1, func2, func3];

function asyncFunc1() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc1");
        setTimeout(() => {
            console.log("Completed asyncFunc1");
            resolve(1);
        }, 1000);
    });
}

function asyncFunc2() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc2");
        setTimeout(() => {
            console.log("Completed asyncFunc2");
            resolve(2);
        }, 1000);
    });
}

function asyncFunc3() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc3");
        setTimeout(() => {
            console.log("Completed asyncFunc3");
            resolve(3);
        }, 1000);
    });
}

function runSequentially(funcs) {
    return funcs.reduce((prevPromise, currentFunc) => {
        return prevPromise.then(() => currentFunc());
    }, Promise.resolve());
}

runSequentially([asyncFunc1, asyncFunc2, asyncFunc3])
    .then(() => {
        console.log("All functions completed in sequence.");
    });