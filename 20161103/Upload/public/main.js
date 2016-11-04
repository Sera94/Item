/**
 * Created by Administrator on 2016/11/3 0003.
 */

(function () {

    var currentList;

//    拖放文件   https://developer.mozilla.org/zh-CN/docs/DragDrop/Drag_and_Drop
//    默认情况下，浏览器阻止任何东西向HTML元素放置拖拽的发生。
//    要使一个元素称为可放置区域，需要阻止浏览器的默认行为，也就是要监听dragenter 和 dragover 事件。
//    在drop发生时做一些事情。你可能想要获取拖拽目标携带的数据并做某些相应的事情
    $("#container").on("dragenter", function (e) {
        e.preventDefault();
    }).on("dragover", function (e) {
        e.preventDefault();
    }).on("drop", function (e) {
        e.preventDefault();

        console.log(e.originalEvent.dataTransfer.files);

        currentList = new ucai.FileList(e.originalEvent.dataTransfer.files);
        $(this).empty().append(currentList.htmlNode);
    });

    $("#btn-start-upload").on("click", function () {
        currentList.upload();
    });


})();
