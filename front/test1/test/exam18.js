function doSomething(s, index) {
    let sArr = s.split(",")
    sArr.splice(index, 1)
    let str = ""

    for(let i = 0; i < sArr.length; i++){
        str += sArr[i]
        if(i < (sArr.length - 1)){
            str += ","
        }
    }

    return str
}

let s = "zero,one,two,three";

console.log(doSomething(s, 0));
console.log(doSomething(s, 1));
console.log(doSomething(s, 2));
console.log(doSomething(s, 3));