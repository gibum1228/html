// 메인 배너 자동 변경
var imgArray = new Array();
imgArray[0] = "image/0.jpg";
imgArray[1] = "image/1.jpg";
imgArray[2] = "image/2.jpg";
imgArray[3] = "image/3.jpg";
imgArray[4] = "image/4.jpg";

function showImage(){
    var imgNum = Math.round(Math.random() * 4);
    var objImg = document.getElementById("introImg");
    objImg.src = imgArray[imgNum];
    setTimeout(showImage, 5000);
}

//계산기
function backward() {
    var exp = document.getElementById("exp");
    var len = exp.value.length;
    if(len == 0)
      return;
    else
      exp.value = exp.value.substr(0, len-1);
}

function clearexp() {
    var exp = document.getElementById("exp");
    exp.value = "0";
}

function addInput(value) {
    var exp = document.getElementById("exp");
    if(exp.value == "0")
      exp.value = value;
    else
      exp.value += value;
}

function calulate() {
    var exp = document.getElementById("exp");
    var str = String(exp.value); // exp.value를 String 형태로 저장하기
    var strPow = str.split("^");
    var strLog = str.split("log");

    if(strPow.length == 2){ // 제곱 ex) 50^2 -> {50, 2}
      exp.value = Math.pow(strPow[0], strPow[1]);
    }else if(str.charAt(str.length-1) == "!"){ // 팩토리얼 계산
      var fac = parseInt(str.substring(0, str.length));
      var result = 1;

      for(var i = 2; i <= fac; i++){
        result *= i;
      }

      exp.value = result;
    }else if(str.charAt(0) == "√") { // 루트 ex) √100
      str = str.substring(1, str.length); // √를 제외한 숫자 구하기 -> 1부터 str.length - 1 까지

      exp.value = Math.sqrt(str);
    }else if(str.substring(0, 3) == "sin"){ // sin
      exp.value = Math.sin(str.substring(3, str.length));
    }else if(str.substring(0, 3) == "cos"){ // cos
      exp.value = Math.cos(str.substring(3, str.length));
    }else if(str.substring(0, 3) == "tan"){ // tan
      exp.value = Math.tan(str.substring(3, str.length));
    }else if(str.substring(0, 3) == "log"){ // log10
      var x = parseInt(str.substring(3, str.length));

      exp.value = Math.log10(x);
    }else{ // 일반 수식
      exp.value = eval(exp.value);
    }
}