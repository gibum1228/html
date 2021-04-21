function createArray() {
    let arr = []
    
    for(let i = 0; i < 3; i++){
        arr[i] = [1, 2, 3]
    }

    return arr
}


let a = createArray();

console.log(a);
a[0][0] = 10;
console.log(a);