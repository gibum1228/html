var input = prompt("정수를 입력하세요", "");
var integer = parseInt(input);

document.write("<h3>별 문자 출력하기</h3>");
document.write("<hr>")

if(isNaN(integer) == true || integer <= 0){
  document.write("입력 오류 입니다.")
}else{
  printStar(input);
}

function printStar(input){
  for(var i = 1; i <= input; i++){
    for(var j = 0; j < i; j++){
      document.write("*")
    }
    document.write("<br>")
  }
}
