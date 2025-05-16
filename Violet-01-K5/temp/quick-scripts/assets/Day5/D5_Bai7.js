(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day5/D5_Bai7.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9dd08T5539Jx6gra3OIgysK', 'D5_Bai7', __filename);
// Day5/D5_Bai7.js

"use strict";

//Bất đồng bộ về việc tự gán thứ tự thực hiện hàm
function asyncFunc1(callback) {
    console.log("Started asyncFunc1");
    setTimeout(function () {
        console.log("Completed asyncFunc1");
        callback();
    }, 3000);
}

function asyncFunc2(callback) {
    console.log("Started asyncFunc2");
    setTimeout(function () {
        console.log("Completed asyncFunc2");
        callback();
    }, 2000);
}

function asyncFunc3(callback) {
    console.log("Started asyncFunc3");
    setTimeout(function () {
        console.log("Completed asyncFunc3");
        callback();
    }, 1000);
}

function callbackManager(funcArray) {
    function runNext(index) {
        if (index >= funcArray.length) {
            console.log("Đã chạy xong");
            return; // Khi index bằng với độ dài của mảng nghĩa là đã chạy hết các phần tử
        }
        var currentFunc = funcArray[index];
        currentFunc(function () {
            // console.log("Wait " + index);
            runNext(index + 1); // Tăng biến Index nhằm gọi đến hàm kế đến để chạy
        });
    }

    runNext(0); // Khởi tạo để chạy từ hàm đầu tiên trong mảng
}

callbackManager([asyncFunc1, asyncFunc2, asyncFunc3]);
//Tổng kết đơn giản: Nếu hoạt động đơn lẻ thì thứ tự chạy sẽ gồm Func3-> Func2 -> Func1 nhưng ta đang làm việc với bất đồng bộ nhằm ghi lại và chạy những hàm mình muốn dù cho timeOut trước đó đã set như thế nào

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
        //# sourceMappingURL=D5_Bai7.js.map
        