/**
 * Created by Administrator on 2016/10/10 0010.
 */

(function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var video = document.getElementById("video");

    var ratio = 1;

    //绘制图片
    // function loadImage() {
    //     // var img = document.createElement("img");
    //     var img = new Image();
    //    
    //     //页面加载之后立即执行
    //     img.onload = function () {
    //         //    drawImage绘制图像、画布或视频    后两个定位x,y
    //         context.drawImage(img, 0, 0);
    //     };
    //     img.src = "1.jpg";
    // }
    //
    // loadImage();


//    绘制视频

    function addListeners() {
    
        //当指定的音频/视频的元数据已加载时，会发生 loadedmetadata 事件。
        video.addEventListener("loadedmetadata", function (e) {
            console.log(video.videoWidth, video.videoHeight);
            ratio = 400 / video.videoWidth;
        });
    
    }

    function render() {

        //状态调整 用save、restore
        context.save();

        //放入视频是自身的大小，可以通过下面这个来适应canvas宽高
        context.scale(ratio, ratio);

        context.drawImage(video, 0, 0);
        context.restore();

        // render函数被不断执行??? 没有这句话，绘制（加载）不出来？？？
        requestAnimationFrame(render);
    }

    function init() {
        addListeners();
        render();
        
    }

    init();

})();