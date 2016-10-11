/**
 * Created by Administrator on 2016/10/10 0010.
 */

//遮罩
(function () {

    var context = document.getElementById("canvas").getContext("2d");
    var circleX = 0;
    var circleY = 300;
    var speed = 1;
    var img;

    function loadImage() {
        img = new Image();
        img.src = "1.jpg";
    }

    function render() {

        circleX += speed;
        if (circleX > 450) {
            speed = -1;
        }
        if (circleX < 150) {
            speed = 1;
        }

        context.clearRect(0, 0, 600, 600);

        context.save();
        context.beginPath();
        context.arc(circleX, circleY, 150, 0, Math.PI * 2);
        context.closePath();

        context.clip();
        context.drawImage(img, 0, 0);

        context.restore();

        requestAnimationFrame(render);
    }

    function init() {

        loadImage();
        render();
    }

    init();

})();