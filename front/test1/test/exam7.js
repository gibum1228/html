function concat7(...a) {
    let str = ""

    for(let i = 0; i < a.length; i++){
        str += a[i]
    }

    return str
}

console.log(concat7("a", "b", "c", "d"));
console.log(concat7("e", "f", "g"));
console.log(concat7("h", "i"));