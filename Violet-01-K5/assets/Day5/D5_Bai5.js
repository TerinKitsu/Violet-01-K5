// for(let i = 10; i >= 1; i--){
//     setTimeout(function(num) {
//         console.log(i);
//     }, (10 - i) * 1000)
// }
//Trong setTimeout sẽ tự tạo một hàm num thực hiện lệnh in ra các index và mỗi khi vòng for chạy thì index sẽ thay đổi và liên tục gọi hàm đồng thời sẽ tính thời gian xuất hiện của console log
for(let i = 10; i >= 1; i--){
    (function(num) {
        setTimeout(() => {
            console.log(num);
        }, (10 - num) * 1000)
    })(i);//truyền i nào num
}