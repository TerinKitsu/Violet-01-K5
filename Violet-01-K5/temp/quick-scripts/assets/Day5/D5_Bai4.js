(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day5/D5_Bai4.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '78aa9vtJLVC2rpg7LAlIf+r', 'D5_Bai4', __filename);
// Day5/D5_Bai4.js

"use strict";

var i = 0;
var j = 0;

function show(a) {
    console.log(a);
}

var printNumber = setInterval(function () {
    i++;
    show(i);

    if (i < 10) {
        var printDot = setInterval(function () {
            j++;
            show(i + "." + j);
            if (j == 10) {
                j = 0;
                clearInterval(printDot);
            }
        }, 90);
    }

    // clear 
    if (i == 10) {
        clearInterval(printNumber);
    }
}, 1000);

//viết 1 hàm đối số để nhận giá trị và thay vì in ra 1->2 thì sẽ là 1.1 1.2 -> 1.10 và qua 2

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
        //# sourceMappingURL=D5_Bai4.js.map
        