/**
 * Created by Administrator on 2016/10/8 0008.
 */

window.ucai = window.ucai || {};

(function () {

    /**
     * @class Shape
     * @constructor Shape
     */
    function Shape(context) {
        this._x = 0;
        this._y = 0;
        this._rotation = 0;
        this._context = context;
    }

    //prototype属性使得有能力向对象添加属性和方法
    //原型法的主要思想是，现在有1个类A,我想要创建一个类B,
    // 这个类是以A为原型的,并且能进行扩展。我们称B的原型为A。
    // javascript中的每个对象都有prototype属性，
    // Javascript中对象的prototype属性的解释是：返回对象类型原型的引用。
    var p = Shape.prototype;

    //将一个或多个属性添加到对象，并/或修改现有属性的特性。
    //object.defineProperties(object, descriptors)
    // object对其添加或修改属性的对象。  这可以是本机 JavaScript 对象或 DOM 对象。
    //descriptors包含一个或多个描述符对象的 JavaScript 对象。  每个描述符对象描述一个数据属性或访问器属性。
    // var p = Shape.prototype;

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
        context: {
            get: function () {
                return this._context;
            }
        }
    });

    p.render = function () {
        this.onUpdate();

        this.context.save();
        this.context.translate(this.x, this.y);
        this.context.rotate(this.rotation);
        this.context.fillStyle = this.color;

        this.onDraw();

        this.context.restore();
    };

    /**
     * @protected
     * @abstract
     */
    p.onDraw = function () {
    };

    /**
     * @abstract
     */
    p.onUpdate = function () {
    };

    ucai.Shape = Shape;
})();