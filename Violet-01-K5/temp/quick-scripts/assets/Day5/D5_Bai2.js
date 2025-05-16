(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day5/D5_Bai2.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '74789QnlCZAGIYQ9jd8DicW', 'D5_Bai2', __filename);
// Day5/D5_Bai2.js

"use strict";

setTimeout(function () {
    var x = sum(3, count(6), show);
    // console.log(x);
}, 2000);

function count(a) {
    return ++a;
}

function sum(a, count, show) {
    var total = a + count;
    show(total);
}

function show(a) {
    console.log("Sum: " + a);
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
        //# sourceMappingURL=D5_Bai2.js.map
        