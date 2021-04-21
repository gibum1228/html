function clone(a) {
    let cloneArr = []

    for(let i = 0; i < a.length; i++){
        cloneArr[i] = a[i]
    }

    return cloneArr
}

let a = [1, 2, 3];
let b = clone(a);

a[0] = 11;

console.log(a);
console.log(b);