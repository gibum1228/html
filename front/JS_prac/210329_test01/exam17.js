function even(a) {
    let arr = []

    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 == 0){
            arr.push(a[i])
        }
    }

    return arr
}

let a = [1, 2, 3, 3, 4, 5, 5, 5, 6];

console.log(even(a));