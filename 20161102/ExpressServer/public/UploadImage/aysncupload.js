/**
 * Created by Administrator on 2016/11/2 0002.
 */

(function () {

    var form = document.querySelector("form");
    var resultDiv = document.querySelector("#result");
    var progressBar = $("#progress-bar");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest();

        ////用于侦听上传进度
        xhr.upload.onprogress = function (e) {
            // console.log(e.loaded / e.total * 100 + "%");

            progressBar.progressbar({value: e.loaded, max: e.total});
        };

        // xhr.onprogress = function (e) {};//用于侦听下载进度

        xhr.addEventListener("load", function () {
            console.log(xhr.responseText);

            // resultDiv.innerHTML = "<img src='" + xhr.responseText + "'>";
            resultDiv.innerHTML = "<video autoplay='autoplay' controls='controls' width='400' height='300' src='" + xhr.responseText + "'></video>";
        });

        xhr.open("POST", "/apis/upload");
        var fd = new FormData(this);
        xhr.send(fd);
    });

})();