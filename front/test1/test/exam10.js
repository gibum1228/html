function swap(a, i, j) {
    [a[i], a[j]] = [a[j], a[i]]
}

let a = [123, 456];

swap(a, 0, 1);
console.log(a);