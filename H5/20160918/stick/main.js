/**
 * Created by Administrator on 2016/9/18 0018.
 */

(function () {

    var mycanvas = document.getElementById("mycanvas");
    var otex = mycanvas.getContext("2d");

    otex.save();
    otex.beginPath();
    otex.font = "16pt Calibri";
    otex.fillStyle = "#fff";
    otex.fillText("0", 140, 16);

    //刷新时出现两个矩形，然后完成一次一动统一向左移？宽随机？
    //otex.save();
    //otex.beginPath();
    //otex.rect(0, 100, 80, 50);
    //otex.fillStyle = "black";
    //otex.fill();
    //otex.restore();
    //
    //otex.save();
    //otex.beginPath();
    //otex.rect(150, 100, 50, 50);
    //otex.fillStyle = "black";
    //otex.fill();
    //otex.restore();

    function drawRect(ox, oy, owidth, oheight) {
        otex.save();
        otex.beginPath();
        otex.rect(ox, oy, owidth, oheight);
        otex.fillStyle = "black";
        otex.fill();
        otex.restore();
    }
    drawRect(0, 100, 80, 50);
    drawRect(150, 100, 50, 50);
    drawRect(280, 100, 70, 50);

    //红色矩形，会移动
    otex.save();
    otex.beginPath();
    otex.rect(50, 92, 26, 8);
    otex.fillStyle = "red";
    otex.fill();
    otex.restore();

//    按住空格黄线增加，up黄线停止增长，然后往右旋转到碰到下一个矩形为止，碰到变成黑色
//    然后红色矩形向右移，不到下一个矩形或者超出下一个矩形都失败

    //otex.save();
    //otex.beginPath();
    //otex.lineWidth = 3;
    //otex.moveTo(78, 100);
    //otex.lineTo(78, 80);
    //otex.strokeStyle = "yellow";
    //otex.stroke();
    //otex.restore();

    //空格按住，直线增长，空格离开旋转  一个keydown函数    一个keyup函数
    function onKeyDown(){
        otex.save();
        otex.beginPath();
        otex.lineWidth = 3;
        otex.moveTo(78, 100);
        otex.lineTo(78, 80);
        otex.strokeStyle = "yellow";
        otex.stroke();
        otex.restore();
    }


})();