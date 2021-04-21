function space2(s) {
    let str = s.slice(s.indexOf(" ")+1)
    
    return str.indexOf(" ") + s.indexOf(" ") + 1
}

console.log(space2("a b c d"));
console.log(space2("one two three four"));