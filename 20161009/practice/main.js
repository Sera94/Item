/**
 * Created by Administrator on 2016/10/9 0009.
 */

(function () {

    var canvas;
    var context;

    var titleText;
    var btnMan;
    var btnPig;

    function createCanvas() {
        canvas = document.createElement("canvas");
        context = canvas.getContext("2d");
        canvas.width = 400;
        canvas.height = 400;
        // canvas.style.border = "solid";
        document.body.appendChild(canvas);
    }

    function createTitleText() {
        titleText = new ucai.Text(context, "请告诉我你是什么？");
        titleText.x = (canvas.width - titleText.textWidth) / 2;
        titleText.y = 30;
    }

    function createManButton() {
        btnMan = new ucai.Button(context, "我是人");
        btnMan.x = 130;
        btnMan.y = 100;
    }

    function createPigButton() {
        btnPig = new ucai.Button(context, "我是猪");
        btnPig.x = btnMan.x + btnMan.textWidth + 80;
        btnPig.y = 100;
    }

    function addListeners() {

        canvas.onclick = function (e) {
            if (btnMan.hitTestPoint(e.offsetX, e.offsetY)) {
                alert("你确实是人");
            }
            if (btnPig.hitTestPoint(e.offsetX, e.offsetY)) {
                for (var i = 0; i < 3; i++) {
                    alert("终于承认你是猪了");
                }
                alert("重要的事情说三遍！");
            }
        }

        canvas.onmousemove = function (e) {
            if (btnMan.hitTestPoint(e.offsetX, e.offsetY)) {
                btnMan.x = Math.random() * 350;
                btnMan.y = Math.random() * 250;
            }
        }
    }

    //清理 重绘render
    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function render() {
        clearCanvas();

        titleText.render();
        btnMan.render();
        btnPig.render();

        requestAnimationFrame(render);
    }

    function init() {

        createCanvas();
        createTitleText();
        createManButton();
        createPigButton();
        addListeners();

        render();
    }

    init();

})();