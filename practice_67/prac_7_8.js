document.write("<h3>16개의 랜덤한 색 만들기</h3><hr>")

for(var i=0 ; i<4 ; ++i) {
  for(var j=0 ; j<4 ; ++j) {
    var x=Math.random()*255;
    x=Math.floor(x);
    var y = Math.random() * 255;
    y = Math.floor(y);
    var z = Math.random() * 255;
    z = Math.floor(z);
    document.write("<div style='background-color : ");
    document.write("rgb(" + x+","+y+","+z+")'>");
    document.write("rgb(" + x + "," + y + "," + z + ")");
    document.write("</div>");
    }
  document.write("<br>");
}
