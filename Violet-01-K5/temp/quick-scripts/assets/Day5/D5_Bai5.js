(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day5/D5_Bai5.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '78e77rMWsRIWoVOAhPr/RH4', 'D5_Bai5', __filename);
// Day5/D5_Bai5.js

"use strict";

// for(let i = 10; i >= 1; i--){
//     setTimeout(function(num) {
//         console.log(i);
//     }, (10 - i) * 1000)
// }
//Trong setTimeout sẽ tự tạo một hàm num thực hiện lệnh in ra các index và mỗi khi vòng for chạy thì index sẽ thay đổi và liên tục gọi hàm đồng thời sẽ tính thời gian xuất hiện của console log
for (var i = 10; i >= 1; i--) {
    (function (num) {
        setTimeout(function () {
            console.log(num);
        }, (10 - num) * 1000);
    })(i); //truyền i nào num
}

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
        //# sourceMappingURL=D5_Bai5.js.map
        