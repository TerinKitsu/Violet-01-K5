"use strict";
cc._RF.push(module, 'bccb6l2NixHvKND5iHIgT8M', 'D5_Bai3');
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