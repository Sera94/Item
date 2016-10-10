/**
 * Created by Administrator on 2016/10/8 0008.
 */

window.ucai = window.ucai || {};

(function () {

    function Rect(label, bgColor, textColor) {
        this._text = new ucai.Text(label, 20);
        ucai.Rectangle.call(this, 100, 30);
        this.color = bgColor ? bgColor : "#ff0000";

        this._textColor = textColor ? textColor : "#ffffff";
        this._text.x = 20;
    }

    var p = Rect.prototype = new ucai.Rectangle();

    p.protected_onDraw = function (context) {
        ucai.Rectangle.prototype.protected_onDraw.call(this, context);

        context.fillStyle = this._textColor;
        this._text.draw(context);
    };

    ucai.Rect = Rect;
})();