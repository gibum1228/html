let count = 0

function f() {
    console.log(new Date())
    count++
    if (count == 10){
        clearInterval(this)
    }
}

setInterval(f, 1000)