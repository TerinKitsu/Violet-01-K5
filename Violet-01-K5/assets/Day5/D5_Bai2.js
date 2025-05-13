setTimeout(() => {
    let x = sum(3, count(6), show)
    // console.log(x);
},2000);

function count(a){
    return ++a;
}

function sum(a, count, show){
    let total = a + count;
    show(total);
}

function show(a){
    console.log("Sum: " + a);
}