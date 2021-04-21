function createArray(count) {
    let num = 1
    let i = 0
    let arr = []

    while(i < count){
        arr.push(num)

        i++
        num += 2
    }

    return arr
}

console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));