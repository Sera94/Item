/**
 * Created by Administrator on 2016/10/12 0012.
 */

(function () {


    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");


    /*
     * 绘制贝塞尔曲线（贝济埃、bezier）
     * context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y)
     *
     * cp1x:第一个控制点x坐标

     cp1y:第一个控制点y坐标

     cp2x:第二个控制点x坐标

     cp2y:第二个控制点y坐标

     x:终点x坐标

     y:终点y坐标
     *
     * */

    // context.moveTo(50, 50);
    // context.bezierCurveTo(50, 50,250, 50, 250, 150);
    // context.stroke();

    /*
     * 绘制二次样条曲线 context.quadraticCurveTo(qcpx,qcpy,qx,qy)
     *
     * qcpx:二次样条曲线控制点x坐标

     qcpy:二次样条曲线控制点y坐标

     qx:二次样条曲线终点x坐标

     qy:二次样条曲线终点y坐标
     * */

    // context.quadraticCurveTo(150, 250, 250, 250);
    // // context.stroke();
    // context.quadraticCurveTo(350, 250, 350, 350);
    //
    // context.quadraticCurveTo(350, 450, 450, 450);
    // context.stroke();


    /*
     * 线条属性：lineCap  设置线条两端的形状  线段帽子
     *
     * butt（默认）
     *
     * round（圆头）
     *
     * square（方头）
     *
     * */

    // context.lineWidth = 30;
    // context.strokeStyle = "blue";
    //
    // context.beginPath();
    // context.moveTo(50, 100);
    // context.lineTo(450, 100);
    // context.lineCap = "butt";
    // context.stroke();
    //
    // context.beginPath();
    // context.moveTo(50, 230);
    // context.lineTo(450, 230);
    // context.lineCap = "round";
    // context.stroke();
    //
    // context.beginPath();
    // context.moveTo(50, 360);
    // context.lineTo(450, 360);
    // context.lineCap = "square";
    // context.stroke();
    //
    // context.lineWidth = 1;
    // context.strokeStyle = "black";
    // context.beginPath();
    // context.moveTo(50, 50);
    // context.lineTo(50, 400);
    // context.moveTo(450, 50);
    // context.lineTo(450, 400);
    // context.stroke();

//    线段的开始处与结尾处   但不能用于线段的连接处
// 动画效果中需要圆角的图形

    context.lineWidth = 10;
    context.strokeStyle = "blue";
    context.moveTo(50, 200);
    context.lineTo(300, 200);
    context.lineTo(300, 100);
    context.lineTo(450, 250);
    context.lineTo(300, 400);
    context.lineTo(300, 300);
    context.lineTo(50, 300);
    context.lineTo(50, 200);
    context.lineCap = "square"; //closePath();
    // context.lineCap = "round";
    context.stroke();
    

 

})();