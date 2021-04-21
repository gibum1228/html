function doSomething(a) {
    let arr = a.slice()

    arr.shift()
    arr.pop()

    return arr
}

let a1 = [3, 4, 5, 6];
let a2 = doSomething(a1);

console.log(a1, a2);