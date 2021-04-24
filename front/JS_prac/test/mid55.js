/*
a 배열의 원소는 파일명이다.
파라미터로 전달된 파일명에서 확장자 부분을 찾아서 리턴하는 getExtension(fileName) 함수를 구현하고,
a 배열의 원소들에 대해서 이 함수를 반복 호출하고 그 리턴값을 출력하
*/

function getExtension(fileName){
    fileName = String(fileName)
    console.log(fileName.slice(fileName.search(/[.]/)))
}

let a = ["hello.html", "world.js", "readme.txt" ]

for(let i = 0; i < a.length; i++){
    getExtension(a[i])
}