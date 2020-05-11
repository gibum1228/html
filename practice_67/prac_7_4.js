document.write("<h3>일요일은 pink, 다른 요일은 gold 배경</h3><hr>")

var current = new Date();

if(current.getDay() == 0){
  document.body.style.backgroundColor = "pink";
}else{
  document.body.style.backgroundColor = "gold";
}

var today;
function findToday(){
  switch (current.getDay()) {
    case 0:
      today = "일요일";
      break;
    case 1:
      today = "월요일";
      break;
    case 2:
      today = "화요일";
      break;
    case 3:
      today = "수요일";
      break;
    case 4:
      today = "목요일";
      break;
    case 5:
      today = "금요일";
      break;
    case 6:
      today = "토요일";
      break;

  }
}

findToday();

document.write("오늘 : " + current.getDate() + "일," + today);
