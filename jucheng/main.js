/**
 * Created by Administrator on 2016/9/8 0008.
 */
$(function () {
   $("#li-phone").on({
       mouseover:function () {
           $(this).css("backgroundColor","#fff");
           $("#phone-popup").show();
       },
       mouseout:function () {
           $(this).css("backgroundColor","#fafafa");
           $("#phone-popup").hide();
       }
   });
    $("#phone-popup").on({
        mouseover:function () {
            $("#phone-popup").show();
        },
        mouseout:function () {
            $("#phone-popup").hide();
        }
    });
    $("#logo-select").on({
        mouseover:function () {
            $(this).css("color","#ff7919");
            $("#logo-select-img").attr("src","images/up.png");
            $("#header-location").show();
        },
    });
    $("#header-location").on({
        mouseover:function () {
            $(this).show();
        },
        mouseout:function () {
            $(this).hide();
            $("#logo-select").css("color","#999");
            $("#logo-select-img").attr("src","images/down.png");
        }
    });
    $("#search-input").on({
        focus:function () {
            $("#header-singer").show();
        },
        blur:function () {
            $("#header-singer").hide();
        }
    });



    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播
        t = 3000; //轮播时间间隔
    length = $('.slider-panel').length;
    //将除了第一张图片隐藏
    $('.slider-panel:not(:first)').hide();
    //将第一个slider-item设为激活状态
    $('.slider-item:first').addClass('slider-item-selected');
    //隐藏向前、向后翻按钮
    $('.slider-page').hide();
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
    $('.slider-panel, .slider-pre, .slider-next').hover(function() {
        stop();
        $('.slider-page').show();
    }, function() {
        $('.slider-page').hide();
        start();
    });
    $('.slider-item').hover(function(e) {
        stop();
        var preIndex = $(".slider-item").filter(".slider-item-selected").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function() {
        start();
    });
    $('.slider-pre').unbind('click');
    $('.slider-pre').bind('click', function() {
        pre();
    });
    $('.slider-next').unbind('click');
    $('.slider-next').bind('click', function() {
        next();
    });
    /**
     * 向前翻页
     */
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /**
     * 向后翻页
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * 从preIndex页翻到currentIndex页
     * preIndex 整数，翻页的起始页
     * currentIndex 整数，翻到的那页
     */
    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-item').removeClass('slider-item-selected');
        $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
    }
    /**
     * 开始轮播
     */
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }
    /**
     * 停止轮播
     */
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //开始轮播
    start();


   $(".other-span").mouseover(function () {
       $(this).css("color","#ff7919");
       $("#other-cities").show();
    });
    $("#other-cities").on({
        mouseover:function () {
            $(this).show();
        },
        mouseout:function () {
            $(this).hide();
            $(".other-span").css("color","#ccc");
        }
    });
    $(".pop-container").on({
        mouseover:function () {
            $(this).children(".pop-transparent").slideDown();
        },
        mouseleave:function () {
            $(this).children(".pop-transparent").slideUp();
        }
    });
    $(".performance-container").on({
        mouseover:function () {
            $(this).children(".performance-transparent").slideDown();
        },
        mouseleave:function () {
            $(this).children(".performance-transparent").slideUp();
        }
    });

    function random() {
        $(".random2div").animate({left: "-100%"},3000, function () {
            $(this).css({left: "0px"});
            $(this).children("div").first().remove().clone(true).appendTo(".random2div");
        });
    }
    var startRandom = setInterval(random,4000);

    $(".random2div").hover(function () {
        clearInterval(startRandom);
    }, function () {
        startRandom = setInterval(random,4000);
    });

    function random1() {
        $(".random1div").animate({left: "-100%"},2000, function () {
            $(this).css({left: "0px"});
            $(this).children("div").first().remove().clone(true).appendTo(".random1div");
        });
    }
    var startRandom1= setInterval(random, 3000);

    $(".random1div").hover(function () {
        clearInterval(startRandom1);
    }, function () {
        startRandom1 = setInterval(random1, 3000);
    });

});