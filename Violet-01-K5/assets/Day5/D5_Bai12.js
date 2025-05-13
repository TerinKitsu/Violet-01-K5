function asyncFunc1() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc1");
        setTimeout(() => {
            console.log("Completed asyncFunc1");
            resolve(1);
        }, 3000);
    });
}

function asyncFunc2() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc2");
        setTimeout(() => {
            console.log("Completed asyncFunc2");
            resolve(2);
        }, 2000);
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

async function runAllAsyncFuncs() {
    try {
        const result1 = await asyncFunc1();
        console.log("Result from asyncFunc1:", result1);
    } catch (error) {
        console.error("Error in asyncFunc1:", error);
    }

    try {
        const result2 = await asyncFunc2();
        console.log("Result from asyncFunc2:", result2);
    } catch (error) {
        console.error("Error in asyncFunc2:", error);
    }

    try {
        const result3 = await asyncFunc3();
        console.log("Result from asyncFunc3:", result3);
    } catch (error) {
        console.error("Error in asyncFunc3:", error);
    }

    console.log("All functions attempted.");
}

runAllAsyncFuncs();