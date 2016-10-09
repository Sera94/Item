/**
 * Created by Administrator on 2016/9/22 0022.
 */

(function () {

    var obanner = document.getElementById("banner");
    var olist = document.getElementById("list");
    var oli = olist.getElementsByTagName("li");
    var octrl = document.getElementById("ctrl");
    //li在for循环中用到，本身应该是通过document来获取，获取速度慢（是因为for），所以通过其父元素来获取？？？
    var akey = octrl.getElementsByTagName("li");
//  获取整个style属性
    var ostyle = document.getElementById("ostyle");

//        li个数
    var uim = 30;
    // 每个li的宽度   clientWidth对象可见的宽度
    var oliwidth = olist.clientWidth / uim;
    var sli = "";
    var ost = "";
    for (var i = 0; i < uim; i++) {
        //生成四张图片  不+=就是替换，前面的都不会出现
        sli += "<li><a></a><a></a><a></a><a></a></li>";
        //设置样式   background-position背景位置
        //(i + 1)因为nth-child是从1开始的
        //图片以容器左上角为参考向左偏移(i * oliwidth)px
        //是为了移除第一张图片的li背景么？
        ost += "#list li:nth-child(" + (i + 1) + ") a{background-position:-" + i * oliwidth + "px}";
    }
    olist.innerHTML = sli;
    ostyle.innerHTML += ost;
    for (var i = 0; i < uim; i++) {
        //每一个的宽度都是oliwidth
        oli[i].style.width = oliwidth + "px";
        // console.log(oli);
    }
    for (var i = 0; i < akey.length; i++) {
        akey[i].index = i;
        //akey[i]  4个<li></li>
        //i==li的下标  0,1,2,3
        // console.log(i);
        akey[i].onclick = function () {
            for (var j = 0; j < uim; j++) {
                //每个隔50毫秒出现
                oli[j].style.transition = 500 + j * 50 + "ms";
                oli[j].style.transform = "rotateX(" + this.index * 90 + "deg)";
            }
        }
    }

})();