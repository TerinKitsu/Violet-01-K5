(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day5/D5_Bai3.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bccb6l2NixHvKND5iHIgT8M', 'D5_Bai3', __filename);
// Day5/D5_Bai3.js

"use strict";

function printNumber(i) {
    if (i > 10) return;
    console.log(i + "");
    setTimeout(function () {
        printNumber(i + 1);
    }, 1000);
}

printNumber(1);

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
        //# sourceMappingURL=D5_Bai3.js.map
        