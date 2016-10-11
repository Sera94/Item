/**
 * Created by Administrator on 2016/10/10 0010.
 */

(function () {

    // var context = document.getElementById("canvas").getContext("2d");
    // var image = document.getElementById("image");
    //
    // function render() {
    //
    //     context.drawImage(image, 0, 0, 100, 100);
    //
    //     requestAnimationFrame(render);
    // }
    //
    // function init() {
    //     render();
    // }
    // init();

    var context = document.getElementById("canvas").getContext("2d");
    var image = document.getElementById("image");


    (function render() {

        //context.drawImage(img,x,y,width,height);  缩放宽高
        // context.drawImage(image, 0, 0, 100, 100);

        //剪切  context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
        // 开始剪切的 x，y 坐标位置。 被剪切图像的宽高。
        //	在画布上放置图像的 x，y 坐标位置。  缩放宽高
        context.drawImage(image, 50, 50, 110, 110, 0, 0, 110, 110);

        requestAnimationFrame(render);
    })();


})();