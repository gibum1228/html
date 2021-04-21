/*
(1) 비어있는 persons1 배열을 생성한다.
(2) for 문에서 객체를 생성하여 persons1 배열의 원소에 대입하시오.
for 문의 실행 결과 배열의 값은 다음과 같아야 한다.
[{ name: "홍길동", age: 16 }, { name: "홍길동", age: 17 }, { name: "홍길동", age: 18 }]
(3) persons1 배열을 얕은 복사하여 persons2 배열을 생성한다.
(4) persons1[0].age = 20; 을 실행한다.
(5) persons1 배열을 출력한다.
(6) persons2 배열을 출력한다
*/

let persons1 = []

for(let i = 0; i < 3; i++){
    persons1.push({ name: "홍길동", age: 16 + i})
}

let persons2 = persons1

persons1[0].age = 20;

console.log("persons1 >> \n", persons1)
console.log("persons2 >> \n", persons2)