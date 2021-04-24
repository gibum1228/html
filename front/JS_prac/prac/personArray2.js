/*
personArray1.js와 동일한 방법으로 persons1 배열을 생성한다.
persons1 배열을 복제해서 persons2 배열을 생성한다.
persons2 배열을 새로 배열을 만들어서, persons1 배열의 값들을 복사.
deep copy가 되도록 복제해야 한다.
즉 배열만 복제 되는 것이 아니고, 배열이 참조하는 객체들도 복제 되어야 한다.
persons2 배열을 출력한다.
*/

let persons1 = []
for(let i = 0; i < 10; i++){
    persons1[i] = { name: "홍길동", age: 16 + parseInt(i)}
}

let persons2 = []
for(let i = 0; i < persons1.length; i++){
    persons2[i] = {}
    persons2[i].name = persons1[i].name
    persons2[i].age = persons1[i].age
}

persons2[0].age = 0;
console.log(persons1)
console.log(persons2)