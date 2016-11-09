/**
 * Created by Administrator on 2016/11/8 0008.
 */
var ucai;
(function (ucai) {
    //export 公开==ucai.Hello = Hello;
    var Hello = (function () {
        function Hello() {
        }
        Hello.prototype.sayHello = function () {
            console.log("Hello World");
        };
        return Hello;
    }());
    ucai.Hello = Hello;
})(ucai || (ucai = {}));
//# sourceMappingURL=Hello.js.map