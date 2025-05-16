"use strict";
cc._RF.push(module, 'd9ffbtOE+tOuJWmL+GDj6dE', 'D5_Bai10');
// Day5/D5_Bai10.js

"use strict";

var timeoutRun = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(timeoutSeconds, asyncFuncs) {
        var _this = this;

        var secondsPassed, timer, results, startTime, wrappedPromises, timeoutPromise;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        console.log("Timeout set: " + timeoutSeconds + " seconds");

                        secondsPassed = 0;
                        timer = setInterval(function () {
                            secondsPassed++;
                            console.log("Time: " + secondsPassed + "s");
                            if (secondsPassed >= timeoutSeconds) {
                                clearInterval(timer);
                            }
                        }, 1000);
                        results = [];
                        startTime = Date.now();

                        // Tạo Promise cho từng async function với cờ đánh dấu kết quả có trong thời gian không

                        wrappedPromises = asyncFuncs.map(function (fn, index) {
                            return new Promise(function () {
                                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
                                    var value, now, elapsed;
                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    _context.prev = 0;
                                                    _context.next = 3;
                                                    return fn();

                                                case 3:
                                                    value = _context.sent;
                                                    now = Date.now();
                                                    elapsed = (now - startTime) / 1000;

                                                    if (elapsed <= timeoutSeconds) {
                                                        results.push({ index: index + 1, result: value, time: elapsed });
                                                    }
                                                    _context.next = 11;
                                                    break;

                                                case 9:
                                                    _context.prev = 9;
                                                    _context.t0 = _context["catch"](0);

                                                case 11:
                                                case "end":
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, _this, [[0, 9]]);
                                }));

                                return function (_x3) {
                                    return _ref2.apply(this, arguments);
                                };
                            }());
                        }
                        // Bỏ qua lỗi
                        );

                        // Tạo Promise timeout

                        timeoutPromise = new Promise(function (resolve) {
                            return setTimeout(function () {
                                return resolve("timeout");
                            }, timeoutSeconds * 1000);
                        });

                        // Chạy race giữa toàn bộ promises và timeout

                        _context2.next = 9;
                        return Promise.race([Promise.allSettled(wrappedPromises), timeoutPromise]);

                    case 9:

                        clearInterval(timer);

                        console.log("Timeout reached or all functions done.");
                        console.log("Results before timeout:", results);
                        return _context2.abrupt("return", results);

                    case 13:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function timeoutRun(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

// Gọi hàm với giới hạn thời gian 2.5 giây


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
    return new Promise(function (resolve) {
        console.log("Started asyncFunc1");
        setTimeout(function () {
            console.log("Completed asyncFunc1");
            resolve(1);
        }, 3000);
    });
}

function asyncFunc2() {
    return new Promise(function (resolve) {
        console.log("Started asyncFunc2");
        setTimeout(function () {
            console.log("Completed asyncFunc2");
            resolve(2);
        }, 2000);
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

function asyncFunc3() {
    return new Promise(function (resolve) {
        console.log("Started asyncFunc3");
        setTimeout(function () {
            console.log("Completed asyncFunc3");
            resolve(3);
        }, 1000);
    });
}
function asyncFunc4() {
    return new Promise(function (resolve) {
        console.log("Started asyncFunc4");
        setTimeout(function () {
            console.log("Completed asyncFunc4");
            resolve(4);
        }, 6000);
    });
}
function asyncFunc5() {
    return new Promise(function (resolve) {
        console.log("Started asyncFunc5");
        setTimeout(function () {
            console.log("Completed asyncFunc5");
            resolve(5);
        }, 3000);
    });
}
function asyncFunc6() {
    return new Promise(function (resolve) {
        console.log("Started asyncFunc5");
        setTimeout(function () {
            console.log("Completed asyncFunc5");
            resolve(3);
        }, 5000);
    });
}

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

cc._RF.pop();