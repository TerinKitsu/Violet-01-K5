"use strict";
cc._RF.push(module, 'dc3dc2qKzFIGL9n8A7t2kTL', 'D5_Bai8');
// Day5/D5_Bai8.js

"use strict";

//Bất đồng bộ về gán thứ tự hàm làm song song nhau và trả về cùng một thời điểm
function asyncFunc1(callback) {
    setTimeout(function () {
        callback(1);
    }, 3000);
}

function asyncFunc2(callback) {
    setTimeout(function () {
        callback(2);
    }, 2000);
}

function asyncFunc3(callback) {
    setTimeout(function () {
        callback(3);
    }, 1000);
}

function asyncParallel(funcArray, finalCallback) {
    var results = [];
    var completedCount = 0;

    funcArray.forEach(function (func, index) {
        func(function (result) {
            results[index] = result; // Lưu kết quả của hàm vào đúng vị trí trong mảng
            completedCount++;

            if (completedCount === funcArray.length) {
                finalCallback(results); // Gọi callback trả về hết kết quả khi thực hiện xong tất cả các hàm
            }
        });
    });
}

asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], function (result) {
    console.log(result);
    // 1, 2, 3 (prints results of each asynchronous function in order)
});

cc._RF.pop();