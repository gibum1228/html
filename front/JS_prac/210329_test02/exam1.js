function doSomething(a, b, c) {
    if(a > b && a > c){
        return a
    }else if(b > a && b > c){
        return b
    }else{
        return c
    }
}

console.log(doSomething(3, 1, 2));
console.log(doSomething(1, 2, 3));
console.log(doSomething(1, 3, 2));