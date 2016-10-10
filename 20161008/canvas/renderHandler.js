/**
 * Created by Administrator on 2016/10/8 0008.
 */

window.ucai = window.ucai || {};

(function () {

    // 任意动画效果的实现、控制

    var handlers = [];

    ucai.RenderHandler = {
        addHandler: function (handler) {
            handlers.push(handler);
        },
        removeHandler: function (handler) {
            var index = handlers.indexOf(handler);
            if (index != -1) {
                handlers.splice(index, 1);
            }
        },
        runHandlers: function () {
            for (var i = 0; i < handlers.length; i++) {
                handlers[i]();
            }
        }
    };

})();