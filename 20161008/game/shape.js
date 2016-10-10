/**
 * Created by Administrator on 2016/10/8 0008.
 */

window.ucai = window.ucai || {};

(function () {

    function Shape() {
        this._x = 0;
        this._y = 0;
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
        }
    });

    p.draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        this.protected_onDraw(context);
        context.restore();
    };

    p.protected_onDraw = function (context) {
    };

    ucai.Shape = Shape;
})();