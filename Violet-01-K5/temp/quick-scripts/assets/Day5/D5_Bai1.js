(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day5/D5_Bai1.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '95c3aMmrMVAHbghRoM7H/tw', 'D5_Bai1', __filename);
// Day5/D5_Bai1.js

"use strict";

//Hàm này sẽ chạy sau 3s tương dương với việc hàm clearTimeout sẽ chạy trước và sẽ tới hàm này
setTimeout(myFunction, 3000);
function myFunction() {
    console.log("Hello World!");
}

var timeOutID = setTimeout(helloFunc, 3000);
function helloFunc() {
    console.log("Hello Again!!");
}

//Ở clearTimeout nếu hàm set dưới đây thực hiện trước thời gian của hàm setTimeout(helloFunc) thì hàm clearTimeout sẽ lập tức hủy đi hàm helloFunc nhưng nếu thời gian thực thi của clearTimeout lâu hơn thì hàm vẫn sẽ chạy tuần tự
setTimeout(function () {
    clearTimeout(timeOutID);
    console.log("Good Bye World!!");
}, 1000);

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
        //# sourceMappingURL=D5_Bai1.js.map
        