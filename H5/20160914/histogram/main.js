/**
 * Created by Administrator on 2016/9/14 0014.
 */

(function () {

    var mycanvas = document.getElementById("mycanvas");
    var otex = mycanvas.getContext("2d");

    var arr = [60, 90, 150, 130, 170, 190, 125, 175, 155, 165, 155, 145];

//    表格函数
    function line(startX, endX, startY, endY) {
        otex.beginPath();
        otex.moveTo(startX, startY);
        otex.lineTo(endX, endY);
        otex.stroke();
    }

    line(50, 50, 0, 500);
    line(550, 550, 0, 500);

    //数字
    function write(star, ox, oy) {
        otex.beginPath();
        otex.fillStyle = "black";
        otex.fillText(star, ox, oy);
        otex.closePath();
    }

    //同时出现数字和横线
    for (var i = 0; i < 11; i++) {
        line(50, 550, i * 50, i * 50);
        write(200 - i * 20, 25, i * 50 + 8);
    }

    //同时出现柱状和月份
    function draw(ohgt) {
        for (var i = 0; i < 12; i++) {
            var owidth = 30;
            var oheight = ohgt[i] * 2;
            var ox = 50 + 10 * (i + 1) + owidth * i;
            //***因为出现的顺序是从上往下
            var oy = 500 - oheight;
            drawrect(ox, oy, owidth, oheight);
            write((i + 1) + "月", ox + 4, 520);
        }
    }

    draw(arr);

    function drawrect(ox, oy, owidth, oheight) {
        otex.beginPath();
        otex.rect(ox, oy, owidth, oheight);
        otex.fillStyle = "blue";
        otex.fill();
    }


})();