function doSomething(a) {
    for(let i = 0; i < a.length; i++){
        console.log("index=%d, type=%s, value=%s", i, typeof a[i], a[i])
    }
}

let a = [3, "hello", true, []];

doSomething(a);