/**
 * Created by Administrator on 2016/10/12 0012.
 */

//如果是下面这个程序，点击了执行按钮，那么必须它全部执行完，显示对话框按钮才会起作用
//即有顺序要求 异同步？
(function () {

    var btnRun = document.querySelector("#btn-run");
    var btnShow = document.querySelector("#btn-show");
    var divProgress = document.querySelector("#progress");

    btnRun.onclick = function () {
        //而Worker就可以解决上面的问题，在点击执行之后，立即点击显示按钮就可以出现对话框
        //不影响主线程
        // new Worker("printNumber.js");

        var worker = new Worker("printNumber.js");
        worker.onmessage = function (e) {
            divProgress.innerHTML = e.data;
        }
        worker.postMessage("start");
    }

    btnShow.onclick = function () {
        alert("这是一个对话框");
    }

})();