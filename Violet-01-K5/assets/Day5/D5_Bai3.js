function printNumber(i){
    if(i > 10)
        return
    console.log(i + "");
    setTimeout(() =>{
        printNumber(i + 1);
    }, 1000)
}

printNumber(1);