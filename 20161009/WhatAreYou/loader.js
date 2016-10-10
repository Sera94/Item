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
        var file = SRC[i];

        var script = document.createElement("script");

        //该布尔属性指示浏览器是否在允许的情况下异步执行该脚本。
        // 该属性对于内联脚本无作用 (即没有src属性的脚本）。
        // 异步执行  =false即按照SRC数组先后顺序执行
        script.async = false;
        
        //这个属性定义引用外部脚本的URI，这可以用来代替直接在文档中嵌入脚本。
        // 有src属性的script元素标签内不应该再有嵌入的脚本
        script.src = file;
        document.body.appendChild(script);


    }

})();