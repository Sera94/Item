/**
 * Created by Administrator on 2016/10/11 0011.
 */

(function () {

    var text = document.querySelector("#text");
    //localStorage存储到本地磁盘，浏览器关闭重启还是存在的，不清楚   
    // 而sessionStorage不会保存
    // var storage = localStorage;
    var storage = sessionStorage;

    // text.oninput = function () {
    //     console.log(text.value);
    // }

    //添加时间监听器  keyup/input可以在输入的同时输出
    text.addEventListener("keyup", function () {
        storage.setItem("data", text.value);
    });

    text.value = storage.getItem("data");
})();