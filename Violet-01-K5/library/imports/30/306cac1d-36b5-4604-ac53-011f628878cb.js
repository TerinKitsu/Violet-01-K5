"use strict";
cc._RF.push(module, '306cawdNrVGBKxTAR9iiHjL', 'D5_Bai6');
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