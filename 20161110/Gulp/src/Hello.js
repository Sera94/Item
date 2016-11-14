/**
 * Created by Administrator on 2016/11/10 0010.
 */

window.ucai = window.ucai || {};

(function () {

    function Hello() {

    }

    Hello.prototype.sayHello = function () {
        console.log("Hello Gulp 4");
    };

    ucai.Hello = Hello;
})();