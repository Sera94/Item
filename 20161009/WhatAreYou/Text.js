/**
 * Created by Administrator on 2016/10/9 0009.
 */

window.ucai = window.ucai || {};

(function () {


    /**
     * @class Text
     * @extends Shape  继承自？
     * @param {CanvasRenderingContext2D} context
     * @param str  参数
     * @constructor
     */
    function Text(context, str) {

        //obj1.func.call(obj)方法
        // 意思是将obj看成obj1,调用func方法
        //call第一个参数是需要调用的函数对象，在函数体内这个参数就是this的值，
        // 剩余的参数是需要传递给函数的值，
        // call与apply的不同就是call传的值可以是任意的，而apply传的剩余值必须为数组。
        ucai.Shape.call(this, context);

        this._string = str;
        this._fontSize = 10;

        this._textWidth = 0;
        if (context && str) {
            this._textWidth = context.measureText(str).width;
        }
    }
    // A.prototype = new B();
    // 理解prototype不应把它和继承混淆。A的prototype为B的一个实例，
    // 可以理解A将B中的方法和属性全部克隆了一遍。A能使用B的方法和属性。
    // 这里强调的是克隆而不是继承。可以出现这种情况：A的prototype是B的实例，
    // 同时B的prototype也是A的实例。
    //    Text继承自Shape  即Text可以使用Shape的全部属性和方法
    var p = Text.prototype = new ucai.Shape();
    

    p.onDraw = function (context) {
        //    绘制文字  x,y,最大宽度
        this.context.fillText(this._string, 0, this._fontSize);
    }
    
    Object.defineProperties(p,{
        string:{
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
        }
    });

    
//    某一点 测试碰撞
    p.hitTestPoint = function (pointX, pointY) {
        return pointX > this.x &&
            pointY > this.y &&
            pointX < this.x + this.textWidth &&
            pointY < this.y + this._fontSize;
    };

    ucai.Text = Text;

})();