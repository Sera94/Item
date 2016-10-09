/**
 * Created by Administrator on 2016/9/14 0014.
 */

(function () {

    var mycanvas = document.getElementById("mycanvas");
    var otex = mycanvas.getContext("2d");

    var arr = [60, 90, 150, 130, 170, 190, 125, 175, 155, 165, 155, 145];

    function line(startX, startY, endX, endY) {
        otex.beginPath();
        otex.moveTo(startX, startY);
        otex.lineTo(endX, endY);
        otex.stroke();
    }

    line(100, 100, 100, 500);
    line(700, 100, 700, 500);

    function write(star, ox, oy) {
        otex.beginPath();
        otex.fillStyle = "black";
        otex.fillText(star, ox, oy);
        otex.closePath();
    }

    for (var i = 0; i < 11; i++) {
        line(100, 100 + i * 40, 700, 100 + i * 40);
        write(400 - i * 40, 70, 100 + i * 40);
    }

    function draw(ohgt) {
        // for (var i = 0; i < 12; i++) {

        var i = 0;
        var owidth = 34;
        var r = 10;
        var star = 0;
        var end = 2 * Math.PI;

        var time = setInterval(function () {
            i++;
            if (i <= 12) {
                var oheight = ohgt[i - 1] * 1.5;
                var ox = 100 + 15 * i + owidth * (i - 1) + 17;
                //***因为出现的顺序是从上往下
                var oy = 500 - oheight;
                drawarc(ox, oy, r, star, end);
                write(i + "月", ox - 10, 520);
                contact(ox, oy, 100 + 15 * (i + 1) + owidth * i + 17, 500 - ohgt[i] * 1.5);
            }

        }, 300);

        // }
    }

    draw(arr);

    function drawarc(ox, oy, r, star, end) {
        otex.beginPath();
        otex.lineWidth = 2;
        otex.strokeStyle = "blue";
        otex.arc(ox, oy, r, star, end);
        otex.stroke();
    }

    function contact(startX, startY, endX, endY) {
        otex.beginPath();
        otex.lineWidth = 2;
        otex.strokeStyle = "blue";
        otex.moveTo(startX, startY);
        otex.lineTo(endX, endY);
        otex.closePath();
        otex.stroke();

    }

})();