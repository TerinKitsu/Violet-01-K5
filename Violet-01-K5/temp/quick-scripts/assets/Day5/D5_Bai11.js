(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day5/D5_Bai11.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5e572U3gxtNi4oDddeUyu5z', 'D5_Bai11', __filename);
// Day5/D5_Bai11.js

"use strict";

function asyncFunc1() {
    return new Promise(function (resolve, reject) {
        console.log("Started asyncFunc1");
        setTimeout(function () {
            console.log("Completed asyncFunc1");
            resolve("Result 1");
        }, 1000);
    });
}

function asyncFunc2() {
    return new Promise(function (resolve, reject) {
        console.log("Started asyncFunc2");
        setTimeout(function () {
            console.log("Failed asyncFunc2");
            reject("Error in asyncFunc2");
        }, 1000);
    });
}

function asyncFunc3() {
    return new Promise(function (resolve) {
        console.log("Started asyncFunc3");
        setTimeout(function () {
            console.log("Completed asyncFunc3");
            resolve("Result 3");
        }, 1000);
    });
}

asyncFunc1().then(function (result1) {
    console.log("Result from asyncFunc1:", result1);
    return asyncFunc2();
}, function (error1) {
    console.error("Error in asyncFunc1:", error1);
    return asyncFunc2(); // vẫn tiếp tục chuỗi
}).then(function (result2) {
    console.log("Result from asyncFunc2:", result2);
    return asyncFunc3();
}, function (error2) {
    console.error("Error in asyncFunc2:", error2);
    return asyncFunc3(); // vẫn tiếp tục chuỗi
}).then(function (result3) {
    console.log("Result from asyncFunc3:", result3);
}, function (error3) {
    console.error("Error in asyncFunc3:", error3);
});

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
        //# sourceMappingURL=D5_Bai11.js.map
        