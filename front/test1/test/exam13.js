function doSomething(a, b) {
    let arr = a.concat(b)

    return arr.sort()
}

let a = [3, 5, 8], b = [2, 1, 6, 4, 7];

console.log(doSomething(a, b));