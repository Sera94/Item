/**
 * Created by Administrator on 2016/10/10 0010.
 */

(function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var memoryCanvas = document.getElementById("canvas");
    var memoryContext = memoryCanvas.getContext("2d");
    var canvas2 = document.getElementById("canvas");
    var context2 = canvas2.getContext("2d");
    
    var button = document.getElementById("button");
    var photo = document.getElementById("photo");
    var circleX = 200, circleY = 200, offsetX, offsetY;

    var video;

    function loadVideo() {
        video = document.createElement("video");
    }

    var img;

    button.onclick = function () {
        context.clearRect(0, 0, 500, 400);
        context.drawImage(video, 0, 0);

        img = new Image();
        img.src = canvas.toDataURL();
        img.width = 500;
        photo.appendChild(img);
    };

    function render() {
        context.clearRect(0, 0, 500, 400);
        context.drawImage(video, 0, 0);

        memoryContext.save();
        memoryContext.fillStyle = "rgba(255,255,255,0.5)";
        memoryContext.fillRect(0, 0, 500, 400);

        memoryContext.restore();

        memoryContext.save();
        memoryContext.beginPath();
        memoryContext.arc(circleX, circleY, 100, 0, Math.PI * 2);
        memoryContext.closePath();
        memoryContext.clip();

        context.drawImage(video, 0, 0);
        memoryContext.restore();

        context2.save();
        context2.beginPath();
        context2.arc(800, 200, 100, 0, Math.PI * 2);
        context2.closePath();
        // context2.clip();

        requestAnimationFrame(render);
    }

    document.onmousedown = function (event) {
        offsetX = circleX - event.pageX;
        offsetY = circleY - event.pageY;

        document.onmousemove = function (event) {
            circleX = event.pageX + offsetX;
            circleY = event.pageY + offsetY;
        };

        document.onmouseup = function (event) {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

    function init() {

        loadVideo();
        navigator.mediaDevices.getUserMedia({
            audio: false, video: true
        }).then(function (result) {
            video.srcObject = result;
        }).catch(function (error) {
            console.log(error);
        });

        render();
    }

    init();


})();