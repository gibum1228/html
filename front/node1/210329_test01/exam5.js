function sum(a) {
    return a.reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    })
}

console.log(sum([1, 2, 3, 4]));
console.log(sum([3, 4, 5]));
console.log(sum([20, 21]));