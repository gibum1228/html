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