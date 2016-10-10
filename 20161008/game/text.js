/**
 * Created by Administrator on 2016/10/8 0008.
 */

window.ucai = window.ucai || {};

(function () {

    function Text(text, fontSize) {
        this._text = text;
        this.fontSize = 20;
    }

    var p =Text.prototype = new ucai.Shape();

    Object.defineProperties(p, {
        text: {
            get: function () {
                return this._text;
            },
            set: function (value) {
                this._text = value;
            }
        },
        fontSize: {
            get: function () {
                return this._fontSize;
            },
            set: function (value) {
                this._fontSize = value;

                this._font = this._fontSize + "px 宋体";
            }
        }
    });

    p.protected_onDraw = function (context) {
        context.font = this._font;
        context.fillText(this._text, 0, this.fontSize);
    };

    ucai.Text = Text;
})();