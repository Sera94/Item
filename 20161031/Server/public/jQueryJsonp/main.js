/**
 * Created by Administrator on 2016/10/31 0031.
 */

//数据的跨域
(function () {

    //index.js 里输出的数据只有在localhost:3000网页可以输出
    //该文件index localhost:63343并不能  即跨域
    //直接写/data亦可
    // $.get("http://localhost:3000/data").done(function (data) {
    //     console.log(data);
    // });

    $.ajax({
        url: "http://localhost:3000/data",
        method: "GET",
        dataType: "jsonp"
    }).done(function (data) {
        console.log(data);
    });

})();