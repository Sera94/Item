/**
 * Created by Administrator on 2016/10/11 0011.
 */

(function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var btn = document.getElementById("btn");
    var btnClear = document.getElementById("btn-clear");
    var storage = localStorage;

    canvas.onmousedown = function (e) {


        context.save();
        context.beginPath();

        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);

        document.onmousemove = function (e) {
            context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            context.stroke();
            context.strokeStyle = "blue";
            context.lineWidth = 3;
            context.restore();

        };

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };

    function addListeners() {
        btn.addEventListener("click", function () {

            var url = canvas.toDataURL();
            storage.setItem("data", url);

        });
        btnClear.addEventListener("click", function () {
            context.clearRect(0, 0, 500, 500);
            storage.clear();

        });
    }

    var img;
    window.onload = function () {

        img = document.createElement("img");
        img.src = storage.getItem("data");

        context.drawImage(img, 0, 0);

    };

    function init() {
        addListeners();
    }

    init();


})();