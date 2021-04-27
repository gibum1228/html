let arr = [];

for(let i = 0; i < 100; i++){
    let num = Math.floor((Math.random() * 100) + 1);

    if(num % 10 in [1, 1, 1, 1, 1]){
        arr.push(num);
    }
}

console.log(arr);