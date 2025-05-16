(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day5/D5_Bai12.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1d58eY4wThOtL1Ub1L2lw7R', 'D5_Bai12', __filename);
// Day5/D5_Bai12.js

"use strict";

var runAllAsyncFuncs = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result1, result2, result3;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return asyncFunc1();

                    case 3:
                        result1 = _context.sent;

                        console.log("Result from asyncFunc1:", result1);
                        _context.next = 10;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](0);

                        console.error("Error in asyncFunc1:", _context.t0);

                    case 10:
                        _context.prev = 10;
                        _context.next = 13;
                        return asyncFunc2();

                    case 13:
                        result2 = _context.sent;

                        console.log("Result from asyncFunc2:", result2);
                        _context.next = 20;
                        break;

                    case 17:
                        _context.prev = 17;
                        _context.t1 = _context["catch"](10);

                        console.error("Error in asyncFunc2:", _context.t1);

                    case 20:
                        _context.prev = 20;
                        _context.next = 23;
                        return asyncFunc3();

                    case 23:
                        result3 = _context.sent;

                        console.log("Result from asyncFunc3:", result3);
                        _context.next = 30;
                        break;

                    case 27:
                        _context.prev = 27;
                        _context.t2 = _context["catch"](20);

                        console.error("Error in asyncFunc3:", _context.t2);

                    case 30:

                        console.log("All functions attempted.");

                    case 31:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7], [10, 17], [20, 27]]);
    }));

    return function runAllAsyncFuncs() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

runAllAsyncFuncs();

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=D5_Bai12.js.map
        