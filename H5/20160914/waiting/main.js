/**
 * Created by Administrator on 2016/9/14 0014.
 */

(function () {

    var mycanvas = document.getElementById("mycanvas");
    var otex = mycanvas.getContext("2d");

    var draw = function (deg) {//角度
        otex.lineWidth = 10;
        for (var i = 0; i < 361; i++) {
            var red = 200;
            var green = 150;
            var blue = 170;
            var alpha = i / 360;
            otex.beginPath();
            //join数组转换成字符串，以逗号隔开的各个数组
            otex.strokeStyle = "rgba(" + [red, green, blue, alpha].join(",") + ")";
            otex.arc(100, 100, 50, (i - 1 + deg) * Math.PI / 180, (i + deg) * Math.PI / 180);
            otex.stroke();
        }
    }
    // draw(0);
    var deg = 0;
    setInterval(function () {
        //要把前一次的旋转清零
        otex.clearRect(0, 0, 500, 500);
        deg += 1;
        draw(deg);
    }, 10)


})();