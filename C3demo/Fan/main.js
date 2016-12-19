/**
 * Created by REN on 2016/9/9.
 */
(function () {

    var bgColors = ["#6be", "#f2b6b6", "#ffe957", "#f29f3f", "#bdb76a", "#ffe957", "#83fcd8", "#61ff69", "#b8f788", "#000"];
    var fans = document.querySelectorAll(".fan");
    var fansLength = fans.length;
    var firstFan = document.querySelector(".fan-1st");
    var midFan = Math.floor((fansLength + 1) / 2);
    var isOpen = false;

    function rotateDEGandTime(ele, deg, time) {
        ele.style.transition = "all " + time + "s";
        ele.style.transform = "rotate(" + deg + "deg)";
    }

    function initFanData() {
        for (var i = 0; i < fansLength; i++) {
            fans[i].number = i;
            fans[i].style.background = bgColors[i];
            fans[i].onclick = fanClicked;
        }
        firstFan.onclick = function () {
            if (!isOpen) openFan();
            else closeFan();
        }
    }

    function initFansDEG() {
        for (var i = 0; i < fansLength; i++) {
            rotateDEGandTime(fans[i], 0, 0);
        }
    }

    function openFan() {
        for (var i = 0; i < fansLength; i++) {
            var deg = -15 * (midFan - i);
            rotateDEGandTime(fans[i], deg, 1);
        }
        isOpen = true;
    }

    function closeFan() {
        for (var i = 0; i < fansLength; i++) {
            rotateDEGandTime(fans[i], 360);
        }
        setTimeout(initFansDEG, 1000);
        isOpen = false;
    }

    function fanClicked() {
        var midFan = this.number;
        //left：
        for (var i = 0; i <= midFan; i++) {
            var deg = -15 * (midFan - i);
            rotateDEGandTime(fans[i], deg);
        }
        //right：
        for (var i = midFan + 1; i < fansLength; i++) {
            var deg = 15 * (i - midFan) + 15;
            rotateDEGandTime(fans[i], deg);
        }
    }

    initFanData();

})();