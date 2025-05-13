let i = 0;

function show(a){
    console.log(a);
}

const printNumber = setInterval(() => {
    i++;
    show(i);
    if(i == 10)
        clearInterval(printNumber);
}, 1000)