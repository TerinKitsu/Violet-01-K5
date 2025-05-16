"use strict";
cc._RF.push(module, '74789QnlCZAGIYQ9jd8DicW', 'D5_Bai2');
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