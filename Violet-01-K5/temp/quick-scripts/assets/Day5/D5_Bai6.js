(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day5/D5_Bai6.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '306cawdNrVGBKxTAR9iiHjL', 'D5_Bai6', __filename);
// Day5/D5_Bai6.js

"use strict";

function timer(startValue, step) {
    var currentValue = startValue;
    var intervalId = null;

    function startTimer() {
        if (intervalId !== null) {
            console.log("Timer is already running!");
            return;
        }

        intervalId = setInterval(function () {
            console.log(currentValue);
            currentValue += step;
        }, 1000);
    }

    function stopTimer() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
            console.log("Timer stopped.");
        }
    }

    return {
        startTimer: startTimer,
        stopTimer: stopTimer
    };
}

//Gọi hàm
var timerInstance = timer(100, 10);
timerInstance.startTimer();
setTimeout(function () {
    timerInstance.stopTimer();
}, 7000);

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
        //# sourceMappingURL=D5_Bai6.js.map
        