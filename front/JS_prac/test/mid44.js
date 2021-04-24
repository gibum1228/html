/*
(1) 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열에서 짝수의 갯수를 구해서 출력하라. (반복문 없이, 전역변수 없이, reduce 메소드를 사용하여 구현하라)
*/

let arr = []
let check = 0

for(let i = 0; i < 100; i++){
    arr[i] = (Math.floor((Math.random() * 100) + 1))
    if(arr[i] % 2 == 0) check++
}

console.log(check)
// reduce(콜백함수 [, initValue])를 이용 => initValue 값이 a값이 되며, b 인덱스가 0부터 시작함 (*원래는 a가 인덱스 0, b가 인덱스 1부터 시작함)
console.log(arr.reduce((a, b) => { 
    if(b % 2 == 0){
        a++
    }

    return a
}, 0))