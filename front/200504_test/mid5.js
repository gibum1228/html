let arr = [];

for(let i = 0; i < 100; i++){
    arr[i] = Math.floor((Math.random() * 100) + 1);
}

console.log(arr.reduce((sum, num) => {
    if(num % 2 == 0){
        sum += num;
    }

    return sum;
}, 0));