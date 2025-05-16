(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day5/D5_Bai14.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '517efuWzThP64/G11Rovi9H', 'D5_Bai14', __filename);
// Day5/D5_Bai14.js

"use strict";

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

function runParallelAndOrdered(funcs) {
    var results = new Array(funcs.length); // lưu kết quả theo chỉ số
    var printedIndex = 0; // vị trí cần in tiếp theo

    funcs.forEach(function (func, index) {
        func().then(function (result) {
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
        //# sourceMappingURL=D5_Bai14.js.map
        