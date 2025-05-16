(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day5/D5_Bai9.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c437ch5adVH+I+PPDfHHznf', 'D5_Bai9', __filename);
// Day5/D5_Bai9.js

"use strict";

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

asyncFunc1().then(function (result1) {
    console.log("Result from asyncFunc1:", result1);
    return asyncFunc2(); // trả về một Promise để tiếp tục chuỗi
}).then(function (result2) {
    console.log("Result from asyncFunc2:", result2);
    return asyncFunc3(); // tiếp tục chuỗi
}).then(function (result3) {
    console.log("Result from asyncFunc3:", result3);
    console.log("All functions completed in order.");
}).catch(function (error) {
    console.error("Error occurred:", error);
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
        //# sourceMappingURL=D5_Bai9.js.map
        