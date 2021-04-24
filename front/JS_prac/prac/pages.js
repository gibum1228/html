/*
한 페이지에 10명의 학생 정보를 출력한다고 할 때,
30명의 정보를 출력하려면, 3 페이지,
31명의 정보를 출력하려면, 4 페이지가 필요하다.

let studentCount = 31;
let pageSize = 10;

위와 같이 학생수와 페이지 크기가 각각 주어졌을 때,
페이지 수를 계산해서 출력하는 코드를 구현하시오.
*/

let studentCount = 31;
let pageSize = 10;

console.log(Math.ceil(studentCount / pageSize))