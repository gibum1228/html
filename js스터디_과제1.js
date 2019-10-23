

function btn_click(){
  var inputFir = document.getElementById("input1").value;
  var inputSec = document.getElementById("input2").value;
  var resultText = document.getElementById("result");
  var oper = document.getElementById("operator").value;

  switch (oper) {
    case "sum":
    resultText.value = parseInt(inputFir)+parseInt(inputSec);
    break;
    case "sub":
    resultText.value = parseInt(inputFir)-parseInt(inputSec);
    break;
    case "mul":
    resultText.value = Math.pow(parseInt(inputFir), parseInt(inputSec));
    break;
    case "div":
    resultText.value = parseInt(inputFir)/parseInt(inputSec);
    break;
    case "rem":
    resultText.value = parseInt(inputFir)%parseInt(inputSec);
  }
};
