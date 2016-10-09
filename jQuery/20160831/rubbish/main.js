/**
 * Created by Administrator on 2016/8/31 0031.
 */

$(function () {

    $(".rubbish1").draggable({
        scope:"can2",
        revert:true,
    });

    $(".rubbish2").draggable({
        scope:"can1",
        revert:true,
    });

    $(".rubbish3").draggable({
        scope:"can3",
        revert:true,
    });

    $(".can1").droppable({
        scope:"can1",
        drop:function () {
            $(".rubbish2").css("display","none");
        }

        // drop:function () {
        //     if("scope","can1") {
        //         $(".rubbish").css("display","none");
        //     }else {
        //         revert:true;
        //     }
        // }
    });

    // $(".can1").droppable({
    //     scope:"can1",
    //     drop:function () {
    //         $(".rubbish6").css("display","none");
    //     }
    // });

    $(".can2").droppable({
        scope:"can2",
        drop:function () {
            $(".rubbish1").css("display","none");
        }
    });

    $(".can3").droppable({
        scope:"can3",
        drop:function () {
            $(".rubbish3").css("display","none");
        }
    });

});