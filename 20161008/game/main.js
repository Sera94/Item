/**
 * Created by Administrator on 2016/10/8 0008.
 */


(function () {
//   ？？？？

    // var canvas;
    // var context;
    // var CANVAS_WIDTH = 400;
    // var CANVAS_HEIGHT = 300;
    //
    // var rect;
    //
    // function createCanvas() {
    //     canvas = document.createElement("canvas");
    //     canvas.width = CANVAS_WIDTH;
    //     canvas.height = CANVAS_HEIGHT;
    //     canvas.style.border = "solid";
    //     document.body.appendChild(canvas);
    //
    //     context = canvas.getContext("2d");
    // }


    function createCanvas() {
        this._canvas = document.createElement("canvas");
        this._ctx = this._canvas.getContext("2d");
        this._canvas.width = 400;
        this._canvas.height = 300;
        document.body.appendChild(this._canvas);
        
        this.text();

        this.render();
    }

    createCanvas.prototype.text = function () {
        this._question = new ucai.Text("告诉我你是什么?", 28);
        this._question.x = 60;

        this._left = new ucai.Rect("我是人");
        this._left.y = 100;

        this._right = new ucai.Rect("我是猪", "blue");
        this._right.y = 100;
        this._right.x = 200;
    };
    
    
    //鼠标移入以及点击效果  鼠标移入矩形移动 ？？？  layer 不会使用？？？

    // createCanvas.prototype.addListeners = function () {
    //     this._canvas.onclick = function (event) {
    //         if (。。。)) {
    //             alert("你确实是个人");
    //         } else if (。。。)) {
    //
    //               alert("终于承认你是个猪了吧");
    //               alert("重要的事情说三遍");
    //         }
    //     }.bind(this);
    //
    //     this._canvas.onmousemove = function () {
    //
    //     };
    // };


    createCanvas.prototype.render = function () {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

        this._question.draw(this._ctx);
        this._left.draw(this._ctx);
        this._right.draw(this._ctx);

        // requestAnimationFrame(this.render.bind(this));
    };

    //？？？？？

    // function init() {
    //     createCanvas();
    // }
    //
    // init();

    new createCanvas();
})();