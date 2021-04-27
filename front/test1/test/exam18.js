function doSomething(s, index) {
    let sArr = s.split(",")
    sArr.splice(index, 1)
    
    // 없어도 됨
    // let str = ""
    // for(let i = 0; i < sArr.length; i++){
    //     str += sArr[i]
    //     if(i < (sArr.length - 1)){
    //         str += ","
    //     }
    // }

    return sArr.toString() // toString()은 ','로 묶어줌
}

let s = "zero,one,two,three";

console.log(doSomething(s, 0));
console.log(doSomething(s, 1));
console.log(doSomething(s, 2));
console.log(doSomething(s, 3));