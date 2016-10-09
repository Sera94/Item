/**
 * Created by Administrator on 2016/9/21 0021.
 */

(function () {

    var banner = document.getElementById("banner");
    var oul = document.getElementsByClassName("banner_img")[0];
    //获取的是btns里的li数组？
    var btns = document.getElementsByClassName("btns")[0].getElementsByTagName("li");
    var change = document.getElementsByTagName("p");
    var ouls = document.getElementsByClassName("banner_img")[0].getElementsByTagName("li");

//    changetime获取时所需要的时间
    function moveTo(banner, oul, btns, change, changetime, banwid) {
        var time;
        var time1;
        var page = 0;
        var maxIndex = btns.length;
        //setInterval用法就是，（调用函数，时间）
        time = setInterval(move, changetime);
        function move() {

            if (page > maxIndex) {
                //不写这句话是直接left=0，跳到第一张没有继续循环的效果
                oul.style.transition = "";
                oul.style.left = "0";
                page = 0;
                //循环完一次，如果不加移动效果，接下来的循环就都只有跳转
                time1 = setTimeout(function () {
                    oul.style.transition = "all 1s linear";
                }, 10)
            }
            oul.style.left = page * (-banwid) + "px";
            //写在下面，第一张切换到第二张才会有移动效果，
            //写在if前面直接从page=1开始了，那么第一张切换到第二张就没有移动效果
            page++;
        }

        //图标的移入效果
        for (var i = 0; i < maxIndex; i++) {
            // 给数组btns的第i个位置的对像（元素  li）的index属性设置 i 这个值。
            //btns[i]得到的是li数组，然后li数组的index索引值（下标）=i
            btns[i].index = i;
            btns[i].onmouseover = function () {
                //~=li的下标？i从0开始，li的下标也从0开始
                page = this.index;
                oul.style.left = page * (-banwid) + "px";
            }
        }

        //鼠标移入图片清除移动  左右图标出现
        banner.onmouseover = function () {
            clearInterval(time);
            clearTimeout(time1);
            change[0].style.display = "block";
            change[1].style.display = "block";
        }
        //鼠标移开，开始移动，左右图标消失
        banner.onmouseout = function () {
            time = setInterval(move, changetime);
            change[0].style.display = "none";
            change[1].style.display = "none";
        }

        //    鼠标点击左右图标
        //左边点击，第一幅图不能再移动
        change[0].onclick = function () {
            page--;
            if (page < 0) {
                oul.style.transition = "";
                // page = ouls.length - 1;
                page = maxIndex;
                time1 = setTimeout(function () {
                    oul.style.transition = "all 1s linear";
                }, 10)
            }
            oul.style.left = page * (-banwid) + "px";
        }

        //右边点击 最后会图片消失，没有循环
        change[1].onclick = function () {
            // if (page >= ouls.length) {
            if (page >maxIndex) {
                oul.style.transition = "";
                page = 0;
                time1 = setTimeout(function () {
                    oul.style.transition = "all 1s linear";
                }, 10)
            }
            oul.style.left = page * (-banwid) + "px";
            page++;

        }


        // console.log(ouls);

    }

    moveTo(banner, oul, btns, change, 2000, 600);

//点击事件 左边page--  page0==最大值  最大值

})();