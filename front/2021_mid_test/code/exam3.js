function countEven(a) {
    return a.reduce((count, num) => {
        if(num % 2 == 0){
            count++;
        }

        return count;
    }, 0);
}

let a = [7, 1, 9, 4, 15, 23, 2, 11, 5, 12, 3];
console.log(countEven(a));