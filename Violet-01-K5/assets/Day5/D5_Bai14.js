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

function runParallelAndOrdered(funcs) {
    const results = new Array(funcs.length);   // lưu kết quả theo chỉ số
    let printedIndex = 0;                      // vị trí cần in tiếp theo

    funcs.forEach((func, index) => {
        func().then((result) => {
            results[index] = result; // lưu kết quả tại đúng vị trí

            // In các kết quả theo thứ tự nếu đã sẵn sàng
            while (results[printedIndex]) {
                console.log(results[printedIndex]);
                printedIndex++;
            }
        });
    });
}

runParallelAndOrdered([asyncFunc1, asyncFunc2, asyncFunc3]);
