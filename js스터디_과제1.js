var inputFir = document.getElementById("input1");
var inputSec = document.getElementById("input2");
var resultText = document.getElementById("result");
var oper = document.getElementById("operator");
var btn = document.getElementById("resultBtn");

function btn_click(){
  switch (oper) {
    case "sum":
    resultText.value = inputFir+inputSec;
    break;
    case "sub":
    resultText.value = inputFir-inputSec;
    break;
    case "mul":
    resultText.value = inputFir*inputSec;
    break;
    case "div":
    resultText.value = inputFir/inputSec;
    break;
    case "rem":
    resultText.value = inputFir%inputSec;
  }
};
