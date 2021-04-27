let arr = [];

for(let i = 0; i < 100; i++){
    arr.push(Math.floor((Math.random() * 100) + 1));
}

console.log(arr.reduce((count, num) => {
    if(num % 2 == 0){
        count++;
    }

    return count;
}, 0));