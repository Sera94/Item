/**
 * Created by Administrator on 2016/10/8 0008.
 */

window.ucai = window.ucai || {};

//translate x,y
(function () {

    function Shape() {
        this._x = 0;
        this._y = 0;
        this._rotation = 0;
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
        color: {
            set: function (value) {
                this._color = value;
            },
            get: function () {
                return this._color;
            }
        },
        rotation: {
            set: function (value) {
                this._rotation = value;
            },
            get: function () {
                return this._rotation;
            }
        },
    });

    p.render = function (context) {
        this.onUpdate();

        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.fillStyle = this.color;

        this.onDraw(context);

        context.restore();
    }

    //两个抽象函数
    p.onDraw = function (context) {
        
    };

    p.onUpdate = function (context) {

    };

    ucai.Shape = Shape;

})();