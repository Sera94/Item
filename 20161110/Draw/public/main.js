/**
 * Created by Administrator on 2016/11/10 0010.
 */

(function () {

    var socket = io(location.origin);

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.onmousedown = function (e) {

        // var ox = e.clientX - canvas.offsetLeft;
        // var oy = e.clientY - canvas.offsetTop;

        context.save();
        context.beginPath();
        context.moveTo(e.pageX, e.pageY);

        document.onmousemove = function (e) {
            // console.log(e.pageX, e.pageY);
            context.lineTo(e.pageX, e.pageY);
            context.stroke();
            context.strokeStyle = "blue";
            context.lineWidth = 3;
            context.restore();

            socket.emit("draw", {
                drawToX: e.pageX,
                drawToY: e.pageY
            });
        };

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };

        socket.emit("draw", {
            drawX: e.pageX,
            drawY: e.pageY
        });

    };

    socket.on("draw", function (data) {
        console.log(data);
        context.moveTo(data.drawX, data.drawY);
        context.lineTo(data.drawToX, data.drawToY);
        context.stroke();
        context.strokeStyle = "blue";
        context.lineWidth = 3;
    });

})();