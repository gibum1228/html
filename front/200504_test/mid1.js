let arr = [];
let sum = 0;

for(let i = 0; i < 100; i++){
    arr.push(Math.floor((Math.random() * 100) + 1));

    sum += arr[i];
}

console.log((sum / 100).toFixed(1))