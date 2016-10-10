/**
 * Created by Administrator on 2016/10/8 0008.
 */

window.ucai = window.ucai || {};

(function () {

    function Rectangle(width, height) {
        this._width = width;
        this._height = height;
        this._color = "#ff0000";
    }

    var p = Rectangle.prototype = new ucai.Shape();

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
        color: {
            set: function (value) {
                this._color = value;
            },
            get: function () {
                return this._color;
            }
        },
    });


    p.protected_onDraw = function (context) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.width, this.height);
    };


    ucai.Rectangle = Rectangle;
})();