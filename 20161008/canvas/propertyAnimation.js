/**
 * Created by Administrator on 2016/10/8 0008.
 */

window.ucai = window.ucai || {};

(function () {
    
    /**
     *
     * @param {Shape} target
     * @param {String} propertyName
     * @param {Number} from
     * @param {Number} to
     * @param {Number} frames 速度
     * @constructor
     */

    // ucai.PropertyAnimation(rect, "x", 100, 200, 200);举例
    function PropertyAnimation(target, propertyName, from, to, frames) {
        var speed = (to - from) / frames;
        var frameCount = 0;

        var handler = function () {
            target[propertyName] += speed;

            frameCount++;

            if (frameCount >= frames) {
                ucai.RenderHandler.removeHandler(handler);
                target[propertyName] = to;
            }
        };
        target[propertyName] = from;
        ucai.RenderHandler.addHandler(handler);
    }

    ucai.PropertyAnimation = PropertyAnimation;


})();
