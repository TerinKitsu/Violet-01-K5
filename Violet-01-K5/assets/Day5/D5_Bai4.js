let i = 0;
let j = 0;

function show(a){
    console.log(a);
}

const printNumber = setInterval(() => {
    i++;
    show(i);


    if(i < 10){
        const printDot = setInterval(() => {
            j++;
            show(i + "." + j)
            if( j == 10){
                j = 0;
                clearInterval(printDot);
            }
        }, 90 )
    }
    
    // clear 
    if(i == 10){
        clearInterval(printNumber);
    }
}, 1000)

//viết 1 hàm đối số để nhận giá trị và thay vì in ra 1->2 thì sẽ là 1.1 1.2 -> 1.10 và qua 2