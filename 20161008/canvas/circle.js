/**
 * Created by Administrator on 2016/10/8 0008.
 */

window.ucai = window.ucai || {};

//画圆
(function () {

    function Circle(r) {
        this._r = r;
    }

    var p = Circle.prototype = new ucai.Shape();

    p.onDraw = function (context) {
        context.beginPath();
        context.arc(0, 0, this._r, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    };

    ucai.Circle = Circle;

})();