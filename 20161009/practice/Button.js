/**
 * Created by Administrator on 2016/10/9 0009.
 */

window.ucai = window.ucai || {};

(function () {

    function Button(context, label) {
        ucai.Text.call(this, context, label);
    }

    var p = Button.prototype = new ucai.Text();

    p.onDraw = function () {
        ucai.Text.prototype.onDraw.call(this);
    };

    ucai.Button = Button;
})();