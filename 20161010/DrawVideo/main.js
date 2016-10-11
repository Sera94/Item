/**
 * Created by Administrator on 2016/10/10 0010.
 */

//像素操作
// createImageData() 方法创建新的空白 ImageData 对象。新对象的默认像素值 transparent black。
// 对于 ImageData 对象中的每个像素，都存在着四方面的信息，即RGBA值：(一个像素有四个值，数组中，每四个值为一个像素)
// R - 红色 (0-255) 黑色-白色
// G - 绿色 (0-255) 黑色-白色
// B - 蓝色 (0-255) 黑色-白色
// A - alpha 通道 (0-255) 透明-不透明
// 因此 ，transparent black 表示 (0,0,0,0)。

(function () {

    var videoWidth = 640;
    var videoHeight = 272;
    var context = document.getElementById("canvas").getContext("2d");
    var video;

    var targetBitmap = context.createImageData(videoWidth, videoHeight);

    function loadVideo() {
        video = document.createElement("video");
        video.src = "movie.mp4";
        //自动播放
        video.autoplay = true;

    }

    function render() {

        context.drawImage(video, 0, 0);

        //getImageData获取图像数据
        var sourceImageData = context.getImageData(0, 0, videoWidth, videoHeight);

        for (var i = 0; i < sourceImageData.data.length; i += 4) {
            var r = sourceImageData.data[i];
            var g = sourceImageData.data[i + 1];
            var b = sourceImageData.data[i + 2];

            //黑白像素，即r,g,b相等  最后一个默认255，不透明
            var c = (r + g + b) / 3;

            targetBitmap.data[i] = c;
            targetBitmap.data[i + 1] = c;
            targetBitmap.data[i + 2] = c;
            targetBitmap.data[i + 3] = 255;

            //若第二个=g,则视频绿色，其余同等，第一个=r即红色
            // targetBitmap.data[i] = 0;
            // targetBitmap.data[i + 1] = g;
            // targetBitmap.data[i + 2] = 0;
            // targetBitmap.data[i + 3] = 255;
        }

        //putImageData把图像数据传到画布上
        context.putImageData(targetBitmap, 0, 0);

        requestAnimationFrame(render);
    }

    function init() {
        loadVideo();
        render();
    }

    init();

    // var videoWidth = 640;
    // var videoHeight = 272;
    // var canvas = document.getElementById("canvas");
    // var memoryCanvas = document.createElement("canvas");
    // memoryCanvas.width = 400;
    // memoryCanvas.height = 300;
    // var context = canvas.getContext("2d");
    // var memoryContext = memoryCanvas.getContext("2d");
    // var targetBitmap = memoryContext.createImageData(videoWidth, videoHeight);
    //
    // var video;
    //
    // function loadVideo() {
    //     video = document.createElement("video");
    //     video.autoplay = true;
    //     video.src = "movie.mp4";
    // }
    //
    // function render() {
    //
    //     // context.drawImage(video, 0, 0);
    //
    //     memoryContext.drawImage(video, 0, 0);
    //     var sourceImageData = memoryContext.getImageData(0, 0, videoWidth, videoHeight);
    //
    //     for (var i = 0; i < sourceImageData.data.length; i += 4) {
    //         var r = sourceImageData.data[i];
    //         var g = sourceImageData.data[i + 1];
    //         var b = sourceImageData.data[i + 2];
    //
    //         var c = (r + g + b) / 3;
    //
    //         targetBitmap.data[i] = c;
    //         targetBitmap.data[i + 1] = c;
    //         targetBitmap.data[i + 2] = c;
    //         targetBitmap.data[i + 3] = 255;
    //
    //         // targetBitmap.data[i] = 0;
    //         // targetBitmap.data[i + 1] = g;
    //         // targetBitmap.data[i + 2] = 0;
    //         // targetBitmap.data[i + 3] = 255;
    //     }
    //
    //     context.putImageData(targetBitmap, 0, 0);
    //
    //     requestAnimationFrame(render);
    // }
    //
    // function init() {
    //     loadVideo();
    //     render();
    // }
    //
    // init();


})();