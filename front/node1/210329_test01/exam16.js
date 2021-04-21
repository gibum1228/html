function even(a) {
    let i = 0

    while(i < a.length){
        if(a[i] % 2 != 0){
            a.splice(i, 1)
        }else{
            i++
        }
    }
}

let a = [1, 2, 3, 3, 4, 5, 5, 5, 6];

even(a);
console.log(a);