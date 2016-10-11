/**
 * Created by Administrator on 2016/10/10 0010.
 */

//异步编程（ES6==ES2015）  navigator.mediaDevices.getUserMedia异步API  then  发生错误则catch

(function () {
    var video = document.getElementById("video");

    function init() {
        navigator.mediaDevices.getUserMedia({
            audio: false, video: true
        }).then(function (result) {
            video.srcObject = result;
        }).catch(function (error) {
            console.log(error);
        });
    }

    init();

})();