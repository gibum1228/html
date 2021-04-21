function space5(s) {
    let str = ""
    let sArr = s.split(" ")

    for(let i = 0; i < sArr.length; i++){
        str += sArr[i]
    }

    return str
}

console.log(space5("a b c"));
console.log(space5("one two"));