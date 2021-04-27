function sum(arr) {
    return arr.reduce((a, b) => {
        return a + b;
    })
}

function test_sum(callback){
    let arr = [];
    
    for(let i = 0; i < 5; i++){
        arr.push(Math.floor(Math.random() * 11));
    }
    console.log("배열 원소 목록>>");
    console.log(arr);
    console.log("콜백 함수 리턴값>>");
    console.log(callback(arr));
}

// START
for(let i = 0; i < 5; i++){
    console.log("=====", i+1, "번째 =====")
    test_sum(sum);
}