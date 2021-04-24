/*
(1) 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열의 원소들 중에서 1의 자리가 5 이상, 9 이하 값들을 제거한다.
(예: 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 25, 26, 27, 28, 29 ...)
(4) 배열을 출력한다.
*/

let arr = []

for(let i = 0; i < 100; i++){
    let str1 = Math.floor((Math.random() * 100) + 1).toString()

    switch(str1.charAt(str1.length - 1)){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
            arr.push(parseInt(str1))
    }
}

console.log(arr)