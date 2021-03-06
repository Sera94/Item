/**
 * Created by REN on 2016/9/1.
 */

(function () {

    var imgs = document.getElementsByTagName("img");
    var imgLength = imgs.length;
    var btn = document.querySelector("#btn");
    var doneNum = 0, isPlay = false;

    btn.onclick = function () {
        if (!isPlay) {
            isPlay = true;
            for (var i = 0; i < imgLength; i++) {
                startAnimate(i);
            }
        }
    }

    function startAnimate(num) {
        setTimeout(function () {
            animate(imgs[num], "10ms", function () {
                this.style.transform = "scale(0)";
            }, stepTwo)
        }, Math.random() * 1000)
    }

    function stepTwo() {
        animate(this, "1s", function () {
            this.style.transform = "scale(1)";
            this.style.opacity = 0;
        }, function () {
            doneNum++;
            if (doneNum === imgLength) {
                doneNum = 0;
                stepThree();
            }
        })
    }

    function stepThree() {
        for (var i = 0; i < imgLength; i++) {
            imgs[i].style.transition = "0s";
            imgs[i].style.transform = "rotateY(0deg) translateZ(-" + Math.random() * 500 + "px)";
            (function (i) {
                setTimeout(function () {
                    animate(imgs[i], "2s", function () {
                        this.style.opacity = 1;
                        this.style.transform = "rotateY(-360deg) translateZ(0)";
                    }, function () {
                        doneNum++;
                        if (doneNum === imgLength) {
                            doneNum = 0;
                            isPlay = false;
                        }
                    })
                }, Math.random() * 1000)
            })(i)
        }
    }

    function animate(element, time, doFn, callBack) {
        var transitionOver = false;
        element.style.transition = time;
        doFn.call(element);
        element.addEventListener("transitionend", function () {
            if (!transitionOver) {
                callBack && callBack.call(element);
                transitionOver = true;
            }
        })
    }

})();