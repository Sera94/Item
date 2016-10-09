/**
 * Created by Administrator on 2016/9/14 0014.
 */

(function () {

    var mycanvas = document.getElementById("mycanvas");
    var otex = mycanvas.getContext("2d");

    //开始角度位置、结束角度大小、颜色、回调函数
    function draw(start, per, color, fn) {
        var nowpre = 0;
        //百分比数字显示的位置
        var ox = ((200 * Math.cos(start + per / 2) + 250) - 250) / 2 + 240;
        var oy = ((200 * Math.sin(start + per / 2) + 250) - 250) / 2 + 240;

        var time = setInterval(function () {
            //加等结束角度百分比
            nowpre += per / 100;

            if (nowpre >= per) {
                clearInterval(time);
                nowpre = per;
            }
            otex.beginPath();
            otex.fillStyle = color;
            //start + nowpre  不加start会覆盖
            otex.arc(250, 250, 200, start, start + nowpre, false);
            //不回到该点，不能填充
            otex.lineTo(250, 250);
            otex.closePath();
            otex.fill();
            if (nowpre >= per) {
                otex.beginPath();
                otex.fillStyle = "black";
                otex.font = "20px 宋体";
                otex.closePath();
                otex.fillText((per / (2 * Math.PI)) * 100 + "%", ox, oy);
                fn()
            }
        }, 10)
    }

    //per百分比
    function count(per) {
        return (per / 100) * 2 * Math.PI;
    }

    draw(0, count(15), "#FF0000", function () {
        draw(count(15), count(25), "#FFFF00", function () {
            draw(count(40), count(60), "#ADFF2E", function () {

            })
        })
    });


})();