var input = prompt("수식 입력", "");
if(input == null){

}else if(input == ""){

}else{
  var sum = eval(input);
}

document.write("<h3>eval()로 수식 계산</h3>")
document.write("<hr>")
document.write(input + " = " + sum);
