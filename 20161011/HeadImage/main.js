/**
 * Created by Administrator on 2016/10/11 0011.
 */

(function () {

//    查找到UI控件
    var btnShowCamera, btnSnap, camera, videoElement;

    //用于编辑照片的Canvas
    var editPhotoCanvas;
    var editPhotoCanvasContext;

    //用于遮罩的矩形  位置偏移x,y
    var clipRect = new hi.ClipRect(100, 50, 200, 200);
    var dragOffsetX, dragOffsetY;

    //拍照所使用的Canvas
    //如果都在同一个canvas中，拖拽的时候会重绘，即拖拽的时候摄像又启动了，而不是照片
    //所以需再创建一个canvas
    var snappedPhotoCanvas = document.createElement("canvas");
    snappedPhotoCanvas.width = 400;
    snappedPhotoCanvas.height = 300;
    var snappedPhotoCanvasContext = snappedPhotoCanvas.getContext("2d");

    var editPhotoContainer;
    var previewCanvas;
    var previewCanvasContext;

    var btnSaveImage;

    function findUIControls() {
        editPhotoContainer = $("#edit-photo-container");
        editPhotoContainer.hide();

        //存放照片的canvas
        editPhotoCanvas = $("#canvas");
        // jQuery 是对象  可能会有好几个符合的canvas,
        // 所以需要下标来找到相对应的，而canvas只有一个，所以下标是0
        editPhotoCanvasContext = editPhotoCanvas[0].getContext("2d");

        //存放遮罩部分照片
        previewCanvas = $("#preview");
        previewCanvasContext = previewCanvas[0].getContext("2d");

        videoElement = $("#video");

        camera = $("#camera");
        camera.hide();

        btnShowCamera = $("#btn-show-camera");
        btnShowCamera.button();

        btnSnap = $("#btn-snap");
        btnSnap.button();

        btnSaveImage = $("#btn-save-image");
        btnSaveImage.button();
    }

    function addListeners() {
        btnShowCamera.on("click", function () {
            showCamera();
            editPhotoContainer.hide();
        });

        btnSnap.on("click", function () {
            snapVideoToCanvas();
        });

        btnSaveImage.on("click", function () {
            window.open(previewCanvas[0].toDataURL());
        });

        editPhotoCanvas.on("mousedown", function (e) {

            dragOffsetX = clipRect.x - e.offsetX;
            dragOffsetY = clipRect.y - e.offsetY;

            editPhotoCanvas.on("mousemove", function (mouseMoveEvent) {
                clipRect.x = mouseMoveEvent.offsetX + dragOffsetX;
                clipRect.y = mouseMoveEvent.offsetY + dragOffsetY;

                drawEditPhotoCanvas();
            });
            editPhotoCanvas.on("mouseup", function (mouseUpEvent) {
                //取消绑定
                editPhotoCanvas.off("mousemove");
                editPhotoCanvas.off("mouseup");
            });
        });
    }

    function showCamera() {
        camera.show();

        navigator.mediaDevices.getUserMedia({audio: false, video: {width: 400, height: 300}}).then(function (stream) {

            videoElement.prop("srcObject", stream);
        }).catch(function (error) {
            console.error(error);
            alert("您拒绝了使用摄像头");
        });
    }

    function snapVideoToCanvas() {
        camera.hide();
        editPhotoContainer.show();

        snappedPhotoCanvasContext.clearRect(0, 0, 400, 300);
        //[0]同理  开始剪切x,y的位置  被剪切图像的宽高
        snappedPhotoCanvasContext.drawImage(videoElement[0], 0, 0, 400, 300);

        drawEditPhotoCanvas();
    }

    function drawEditPhotoCanvas() {
        editPhotoCanvasContext.clearRect(0, 0, 400, 300);

        editPhotoCanvasContext.save();
        editPhotoCanvasContext.drawImage(snappedPhotoCanvas, 0, 0, 400, 300);
        editPhotoCanvasContext.restore();

        editPhotoCanvasContext.save();
        editPhotoCanvasContext.globalAlpha = 0.5;
        editPhotoCanvasContext.fillStyle = "#ffffff";
        editPhotoCanvasContext.fillRect(0, 0, 400, 300);
        editPhotoCanvasContext.restore();

        editPhotoCanvasContext.save();

        clipRect.draw(editPhotoCanvasContext);

        editPhotoCanvasContext.drawImage(snappedPhotoCanvas, 0, 0, 400, 300);
        editPhotoCanvasContext.restore();

        drawPreviewCanvas();
    }

    function drawPreviewCanvas() {
        previewCanvasContext.clearRect(0, 0, 200, 200);
        previewCanvasContext.drawImage(snappedPhotoCanvas, clipRect.x, clipRect.y, 200, 200, 0, 0, 200, 200);
    }

    function init() {
        findUIControls();
        addListeners();
    }

    init();
})();