"use strict";
cc._RF.push(module, '1a14cr1yC1PK5IAQKy78KHl', 'D5_Bai15');
// Day5/D5_Bai15.js

"use strict";

var asyncFunc1 = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt("return", new Promise(function (resolve) {
                            setTimeout(function () {
                                console.log("asyncFunc1 done");
                                resolve("Kết quả từ asyncFunc1");
                            }, 3000); // 3 giây mới hoàn tất
                        }));

                    case 1:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function asyncFunc1() {
        return _ref.apply(this, arguments);
    };
}();

var asyncFunc2 = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt("return", new Promise(function (resolve) {
                            setTimeout(function () {
                                console.log("asyncFunc2 done");
                                resolve("Kết quả từ asyncFunc2");
                            }, 2000); // 2 giây
                        }));

                    case 1:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function asyncFunc2() {
        return _ref2.apply(this, arguments);
    };
}();

var asyncFunc3 = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        return _context3.abrupt("return", new Promise(function (_, reject) {
                            setTimeout(function () {
                                console.log("asyncFunc3 failed");
                                reject("Lỗi từ asyncFunc3");
                            }, 1000); // Bị lỗi sau 1 giây
                        }));

                    case 1:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function asyncFunc3() {
        return _ref3.apply(this, arguments);
    };
}();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function timeoutFunc() {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2500;

    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject("Timeout: Out of time");
        }, timeout);
    });
}

var asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3];
var timeLimit = 2500;

var promiseArr = [].concat(_toConsumableArray(asyncArr.map(function (fn) {
    return fn();
})), [timeoutFunc(timeLimit)]);

Promise.race(promiseArr).then(function (result) {
    return console.log("Success: ", result);
}).catch(function (error) {
    return console.log("Fail: ", error);
});

cc._RF.pop();