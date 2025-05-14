// function asyncFunc1() {
//     return new Promise((resolve) => {
//         console.log("Started asyncFunc1");
//         setTimeout(() => {
//             console.log("Completed asyncFunc1");
//             resolve(1);
//         }, 3000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve) => {
//         console.log("Started asyncFunc2");
//         setTimeout(() => {
//             console.log("Completed asyncFunc2");
//             resolve(2);
//         }, 2000);
//     });
// }

// function asyncFunc3() {
//     return new Promise((resolve) => {
//         console.log("Started asyncFunc3");
//         setTimeout(() => {
//             console.log("Completed asyncFunc3");
//             resolve(3);
//         }, 1000);
//     });
// }

// async function runAllAsyncFuncs() {
//     try {
//         const result1 = await asyncFunc1();
//         console.log("Result from asyncFunc1:", result1);

//         const result2 = await asyncFunc2();
//         console.log("Result from asyncFunc2:", result2);

//         const result3 = await asyncFunc3();
//         console.log("Result from asyncFunc3:", result3);

//         console.log("All functions completed in order.");
//     } catch (error) {
//         console.error("Error occurred:", error);
//     }
// }

// runAllAsyncFuncs();

// //Viết hàm setTimeout để dừng hàm async trong thời gian quy định, nếu trong hàm async vẫn còn hàm chưa chạy sẽ dừng hẳn và đồng thời đếm ra thời gian chạy và dừng lại


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

function asyncFunc3() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc3");
        setTimeout(() => {
            console.log("Completed asyncFunc3");
            resolve(3);
        }, 1000);
    });
}
function asyncFunc4() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc4");
        setTimeout(() => {
            console.log("Completed asyncFunc4");
            resolve(4);
        }, 6000);
    });
}
function asyncFunc5() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc5");
        setTimeout(() => {
            console.log("Completed asyncFunc5");
            resolve(5);
        }, 3000);
    });
}
function asyncFunc6() {
    return new Promise((resolve) => {
        console.log("Started asyncFunc5");
        setTimeout(() => {
            console.log("Completed asyncFunc5");
            resolve(3);
        }, 5000);
    });
}

async function timeoutRun(timeoutSeconds, asyncFuncs) {
    console.log(`Timeout set: ${timeoutSeconds} seconds`);
    
    let secondsPassed = 0;
    const timer = setInterval(() => {
        secondsPassed++;
        console.log(`Time: ${secondsPassed}s`);
        if (secondsPassed >= timeoutSeconds) {
            clearInterval(timer);
        }
    }, 1000);

    const results = [];
    const startTime = Date.now();

    // Tạo Promise cho từng async function với cờ đánh dấu kết quả có trong thời gian không
    const wrappedPromises = asyncFuncs.map((fn, index) =>
        new Promise(async (resolve) => {
            try {
                const value = await fn();
                const now = Date.now();
                const elapsed = (now - startTime) / 1000;
                if (elapsed <= timeoutSeconds) {
                    results.push({ index: index + 1, result: value, time: elapsed });
                }
            } catch (err) {
                // Bỏ qua lỗi
            }
        })
    );

    // Tạo Promise timeout
    const timeoutPromise = new Promise((resolve) =>
        setTimeout(() => resolve("timeout"), timeoutSeconds * 1000)
    );

    // Chạy race giữa toàn bộ promises và timeout
    await Promise.race([
        Promise.allSettled(wrappedPromises),
        timeoutPromise
    ]);

    clearInterval(timer);

    console.log("Timeout reached or all functions done.");
    console.log("Results before timeout:", results);
    return results;
}

// Gọi hàm với giới hạn thời gian 2.5 giây
timeoutRun(5, [asyncFunc1, asyncFunc2, asyncFunc3, asyncFunc4, asyncFunc5, asyncFunc6]);


// function asyncFunc1() {
//     return new Promise((resolve) => {
//         console.log("Started asyncFunc1");
//         setTimeout(() => {
//             console.log("Completed asyncFunc1");
//             resolve(1);
//         }, 3000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve) => {
//         console.log("Started asyncFunc2");
//         setTimeout(() => {
//             console.log("Completed asyncFunc2");
//             resolve(2);
//         }, 2000);
//     });
// }

// function asyncFunc3() {
//     return new Promise((resolve) => {
//         console.log("Started asyncFunc3");
//         setTimeout(() => {
//             console.log("Completed asyncFunc3");
//             resolve(3);
//         }, 1000);
//     });
// }

// async function runWithTimeout(timeoutSeconds) {
//     const results = [];
//     let secondsPassed = 0;

//     const timer = setInterval(() => {
//         secondsPassed++;
//         console.log(`⏱️ Time: ${secondsPassed}s`);
//     }, 1000);

//     // Hàm chính gói toàn bộ logic bạn viết vào Promise
//     const mainLogic = async () => {
//         try {
//             const result1 = await asyncFunc1();
//             results.push({ func: "asyncFunc1", result: result1 });
//             console.log("Result from asyncFunc1:", result1);

//             const result2 = await asyncFunc2();
//             results.push({ func: "asyncFunc2", result: result2 });
//             console.log("Result from asyncFunc2:", result2);

//             const result3 = await asyncFunc3();
//             results.push({ func: "asyncFunc3", result: result3 });
//             console.log("Result from asyncFunc3:", result3);

//             console.log("All functions completed in order.");
//         } catch (err) {
//             console.error("Error inside main logic:", err);
//         }
//     };

//     // Hàm timeout
//     const timeoutPromise = new Promise((_, reject) =>
//         setTimeout(() => reject(new Error("⛔ Timeout reached")), timeoutSeconds * 1000)
//     );

//     try {
//         await Promise.race([mainLogic(), timeoutPromise]);
//     } catch (error) {
//         console.warn(error.message);
//     } finally {
//         clearInterval(timer);
//         console.log("✅ Results before timeout:", results);
//     }
// }

// // Gọi với giới hạn thời gian
// runWithTimeout(2.5);
