function space4(s) {
    let str = ""

    for(let i = 0; i < s.length; i++){
        if(s[i] == " "){
            str += "-"
        }else{
            str += s[i]
        }
    }

    return str
}

console.log(space4("a b c"));
console.log(space4("one  two"));