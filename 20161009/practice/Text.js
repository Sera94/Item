/**
 * Created by Administrator on 2016/10/9 0009.
 */

window.ucai = window.ucai || {};

(function () {

    function Text(context, str) {
        ucai.Shape.call(this, context);

        //text  需要输入的文字，x,y,最大宽度
        this._string = str;
        this._fontSize = 10;

        this._textWidth = 0;
        if (context && str) {

            //语法：context.measureText(text).width;
            // 在画布上输出文本之前，检查字体的宽度  text 要测量的文本
            this._textWidth = context.measureText(str).width;
        }

    }

    var p = Text.prototype = new ucai.Shape();

    p.onDraw = function (context) {
        //文本内容 x y 文本宽度（未定义） （fontSize约等于高度）
        this.context.fillText(this._string, 0, this._fontSize);
    }

    Object.defineProperties(p, {
        string: {
            set: function (value) {
                this._string = value;
            },
            get: function () {
                return this._string;
            }
        },
        textWidth: {
            get: function () {
                return this._textWidth;
            }
        },
    })

    //碰撞测试  在这个范围内算是点击中
    p.hitTestPoint = function (pointX, pointY) {
        return pointX > this._x &&
            pointY > this._y &&
            pointX < this._x + this._textWidth &&
            pointY < this._y + this._fontSize;
    }


    ucai.Text = Text;

})();