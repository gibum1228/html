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
    setTimeout(showImage, 5000); // 5초마다 배경 바꾸기
}


// 시계
window.addEventListener("load", function(){
  clockRun();
});

// 시계 작동 시키기
function clockRun() {
  var d = new Date();

  var s = d.getSeconds();
  var s_angle = s * 6; // 1초에 6도
  var s_angle_value = "rotate(" + s_angle + "deg)";
  document.getElementById("second").style.transform = s_angle_value;

  var m = d.getMinutes();
  var m_angle = m * 6; // 1분에 6도
  var m_angle_value = "rotate(" + m_angle + "deg)";
  document.getElementById("minute").style.transform = m_angle_value;

  var h = d.getHours();
  // 12시간제로 바꾸기
  if(h <= 12){
    var h = h;
  }else{
    var h = h - 12;
  }
  // 시간 <-> 시간 = 5회
  // 5회 x 1분 x 6도 = 30도
  // 시간당 30도 ex) 4시 == 120도, ex) 4시 30분 == 120도 + ?도(30도 / 60분 * 30분)15
  // ex) 4시 45분 == 120도 + ?도(30도 / 60분 * 45분)22.5
  var h_angle = (h * 30) + (30 / 60 * m);
  var h_angle_value = "rotate(" + h_angle + "deg)";
  document.getElementById("hour").style.transform = h_angle_value;

  setTimeout(clockRun, 1000); // 1초마다 재시작
}


// 방명록 작성
function addGuestBook() {
  var guestExp = document.getElementById("guestExp"); // 방명록 글
  var obj = document.getElementById("guestBookBox"); // 부모
  var s = String(guestExp.value);

  if(s == "" || s == null || s == " "){
    guestExp.value = "";
    alert("내용을 적어주세요.");
  }else{
    var child = document.createElement("li");

    child.innerHTML = s;
    child.addEventListener("click", function(){ // 클릭 이벤트
      var p = this.parentElement; // 부모 HTML 요소
      p.removeChild(this); // 부모에서 자식을 삭제
    });

    guestExp.value = "";
    obj.appendChild(child);
  }
}