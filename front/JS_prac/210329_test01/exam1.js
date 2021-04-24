function doSomething(a, b, c) {
    let min = 0

    if((b >= a && b >= c)){
        min = b
    }else if((c >= a && c >= b)){
        min = c
    }else{
        min = a
    }

    return min
}

console.log(doSomething(3, 1, 2));
console.log(doSomething(1, 2, 3));
console.log(doSomething(1, 3, 2));