function createArray(count, min, max) {
    let arr = []

    for(let i = 0; i < count; i++){
        arr.push(Math.floor((Math.random() * (max - min + 1) + min)))
    }

    return arr
}

console.log(createArray(4, 11, 15));
console.log(createArray(5, 21, 25));
console.log(createArray(6, 31, 35));