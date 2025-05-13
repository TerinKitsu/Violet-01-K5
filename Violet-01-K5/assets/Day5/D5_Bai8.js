//Bất đồng bộ về gán thứ tự hàm làm song song nhau và trả về cùng một thời điểm
function asyncFunc1(callback) {
    setTimeout(() => {
        callback(1);
    }, 3000);
}

function asyncFunc2(callback) {
    setTimeout(() => {
        callback(2);
    }, 2000);
}

function asyncFunc3(callback) {
    setTimeout(() => {
        callback(3);
    }, 1000);
}

function asyncParallel(funcArray, finalCallback) {
    const results = [];
    let completedCount = 0;

    funcArray.forEach((func, index) => {
        func((result) => {
            results[index] = result; // Lưu kết quả của hàm vào đúng vị trí trong mảng
            completedCount++;

            if (completedCount === funcArray.length) {
                finalCallback(results); // Gọi callback trả về hết kết quả khi thực hiện xong tất cả các hàm
            }
        });
    });
}

asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], (result) => {
    console.log(result);
    // 1, 2, 3 (prints results of each asynchronous function in order)
    });