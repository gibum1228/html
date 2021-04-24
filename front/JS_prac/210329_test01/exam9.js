function createArray(count) {
    let arr = []
    let i = 0
    let num = 1

    while(i < count){
        arr.push(num)

        num += 2
        i++
    }

    return arr
}

console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));