/*
(1) 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열에서 짝수의 합을 구하여 출력하라. (반복문 없이, 배열의 메소드만 사용하여 구현하라
*/

let arr = []
let sum = 0

for(let i = 0; i < 100; i++){
    arr.push(Math.floor((Math.random() * 100) + 1))
}

arr.forEach(a => {
    if(a % 2 == 0){
        sum += a;
    }
})

console.log(sum)