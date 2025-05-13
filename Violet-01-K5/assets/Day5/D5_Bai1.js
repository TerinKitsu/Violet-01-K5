//Hàm này sẽ chạy sau 3s tương dương với việc hàm clearTimeout sẽ chạy trước và sẽ tới hàm này
setTimeout(myFunction, 3000);
function myFunction(){
    console.log("Hello World!");
}

let timeOutID = setTimeout(helloFunc, 3000);
function helloFunc(){
    console.log("Hello Again!!");
}

//Ở clearTimeout nếu hàm set dưới đây thực hiện trước thời gian của hàm setTimeout(helloFunc) thì hàm clearTimeout sẽ lập tức hủy đi hàm helloFunc nhưng nếu thời gian thực thi của clearTimeout lâu hơn thì hàm vẫn sẽ chạy tuần tự
setTimeout(() => {
    clearTimeout(timeOutID);
    console.log("Good Bye World!!");
}, 1000);
