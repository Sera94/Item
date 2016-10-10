/**
 * Created by Administrator on 2016/10/9 0009.
 */

(function () {

    var SRC = [
        "Shape.js",
        "Text.js",
        "Button.js",
        "main.js"
    ];

    for (var i = 0; i < SRC.length; i++) {
        var script = document.createElement("script");
        var file = SRC[i];

        script.async = false;
        script.src = file;

        document.body.appendChild(script);
    }

})();