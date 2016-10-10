/**
 * Created by Administrator on 2016/10/8 0008.
 */

window.ucai = window.ucai || {};

(function () {

    function Rectangle(width, height) {
        this._width = width;
        this._height = height;

        ucai.Shape.call(this);
    }

    // Rectangle.prototype = new ucai.Shape();
    var p = Rectangle.prototype = new ucai.Shape();

    // var p = Rectangle.prototype;
    // p.onUpdate = function () {
    //     this.rotation += 0.01;
    //     // this.x++;
    // }

    // Rectangle.prototype.render = function (context) {
    //     context.fillRect(0, 0, this._width, this._height);
    // }

    p.onDraw = function (context) {
        // context.fillRect(0, 0, this.width, this.height);
        // context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        context.fillRect(0, 0, this.width, this.height);
    };

    Object.defineProperties(p, {
        width: {
            set: function (value) {
                this._width = value;
            },
            get: function () {
                return this._width;
            }
        },
        height: {
            set: function (value) {
                this._height = value;
            },
            get: function () {
                return this._height;
            }
        },
    });

    ucai.Rectangle = Rectangle;

})();


// //命名空间
// window.ucai = window.ucai || {};
//
// (function () {
//
//     //画矩形 宽高
//     function Rectangle(width,height) {
//         this._width = width;
//         this._height = height;
//     }
//
//
// })();