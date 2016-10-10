/**
 * Created by Administrator on 2016/10/9 0009.
 */

window.ucai = window.ucai || {};

(function () {

    function Shape(context) {
        this._x = 0;
        this._y = 0;

        //文本内容？
        this._context = context;
    }

    var p = Shape.prototype;

    Object.defineProperties(p, {
        x: {
            set: function (value) {
                this._x = value;
            },
            get: function () {
                return this._x;
            }
        },
        y: {
            set: function (value) {
                this._y = value;
            },
            get: function () {
                return this._y;
            }
        },
        context: {
            get: function () {
                return this._context;
            }
        }
    })

    //传递？？？
    p.render = function () {
        this._context.save();
        this._context.translate(this._x, this._y);
        this.onDraw();
        this._context.restore();

    }

    p.onDraw = function () {

    };

    ucai.Shape = Shape;

})();