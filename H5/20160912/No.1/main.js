/**
 * Created by Administrator on 2016/9/12 0012.
 */

(function () {

    var play = document.getElementById("play");
    var video = document.getElementById("video");
    play.onclick = function () {
        if(video.paused){
            video.play();
        }else {
            video.pause();
        }
    }
    

})();