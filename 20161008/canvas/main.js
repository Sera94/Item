/**
 * Created by Administrator on 2016/10/8 0008.
 */

(function () {

    var canvas;
    var context;
    var CANVAS_WIDTH = 400;
    var CANVAS_HEIGHT = 300;

    var rect;

    function createCanvas() {
        canvas = document.createElement("canvas");
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        canvas.style.border = "solid";
        document.body.appendChild(canvas);

        context = canvas.getContext("2d");

        canvas.onclick = canvasEventHandler;
        // canvas.addEventListener("touchmove", canvasEventHandler);
    }

    function canvasEventHandler(e) {

        // console.log(e);
        //offset相对于内容区域且不包括外边框   l相对于HTML节点

        //早期浏览器
        // var mouseX = -1, mouseY = -1;
        // if (e.hasOwnProperty("offsetX")) {
        //     mouseX = e.offsetX;
        // }
        // if (mouseX == -1) {
        //     if (e.hasOwnProperty("layerX")) {
        //         mouseX = e.layerX;
        //     }
        // }
        // if (e.hasOwnProperty("offsetY")) {
        //     mouseY = e.offsetY;
        // }
        // if (mouseY == -1) {
        //     if (e.hasOwnProperty("layerY")) {
        //         mouseY = e.layerY;
        //     }
        // }

        // var mouseX = e.offsetX || e.layerX;
        // var mouseY = e.offsetY || e.layerY;

        // console.log("offset(" + e.offsetX + "," + e.offsetY + "),layer(" + e.layerX + "," + e.layerY + ")");

        if (e.layerX > rect.x &&
            e.layerY > rect.y &&
            e.layerX < rect.x + rect.width &&
            e.layerY < rect.y + rect.height) {

            ucai.PropertyAnimation(rect, "x", 0, 300, 50);
        }

        console.log(e);
    }

    function clearCanvas() {
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    // function drawRect() {
    // context.fillRect(0, 0, 100, 100);
    // var rect = new ucai.Rectangle(200, 100);
    // rect.render(context);
    //
    // rect.width = 100;
    //清理画布
    // clearCanvas();
    //重绘
    // rect.render(context);

    // var rect = new ucai.Rectangle(100, 100);
    function createRectangle() {
        rect = new ucai.Rectangle(100, 100);
        // rect.x = 100;
        rect.y = 100;
        rect.color = "#000000";
        // rect.render(context);

        render();

        // var circle = new ucai.Circle(50);
        // circle.color = "#ff0000";
        // circle.x = 50;
        // circle.y = 50;
        // circle.render(context);
    }

    function render() {
        ucai.RenderHandler.runHandlers();

        clearCanvas();
        rect.render(context);

        //屏幕刷新时执行 与屏幕刷新保持一致  写HTML5都要用这个来写动画
        requestAnimationFrame(render);
    }

    //矩形移动动画的另一种写法
    // function move() {
    //
    //
    //     var id = setInterval(function () {
    //         rect.x++;
    //
    //         clearCanvas();
    //         rect.render(context);
    //
    //         if (rect.x > 200) {
    //             clearInterval(id);
    //         }
    //     }, 20);
    // }

    function init() {
        createCanvas();
        // drawRect();
        createRectangle();
        render();
        // move();

        // ucai.PropertyAnimation(rect, "x", 100, 200, 200);
    }

    init();

})();


// (function () {
//
// //    创建canvas
//     var canvas;
//     var ctx;
//     var CANVAS_WIDTH = 500;
//     var CANVAS_HEIGHT = 500;
//
//     function createCanvas() {
//         canvas = document.createElement("canvas");
//         ctx = canvas.getContext("2d");
//         canvas.width = CANVAS_WIDTH;
//         canvas.height = CANVAS_HEIGHT;
//         document.body.appendChild(canvas);
//     }
//
//     //画矩形
//     function drawRect() {
//
//     }
//
//     function init() {
//         createCanvas();
//     }
//
//     init();
//
// })();