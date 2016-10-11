/**
 * Created by Administrator on 2016/10/10 0010.
 */

(function () {

    var context = document.getElementById("canvas").getContext("2d");
    var rectX = -400;
    var speed = 1;

    function render() {

        context.clearRect(0, 0, 400, 300);

        context.save();
        context.font = "50px Courier New";
        context.fillStyle = "black";
        context.fillText("Hello World", 50, 100);
        context.restore();

        context.save();
        context.beginPath();
        rectX += speed;
        if (rectX > 0) {
            speed = -1;
        }
        if (rectX < -400) {
            speed = 1;
        }
        context.rect(rectX, 0, 400, 300);
        context.closePath();
        context.clip();


        context.font = "50px Courier New";
        context.fillStyle = "#ff0000";
        context.fillText("Hello World", 50, 100);
        context.restore();

        requestAnimationFrame(render);
    }

    function init() {
        render();
    }

    init();

})();