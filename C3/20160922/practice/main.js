/**
 * Created by Administrator on 2016/9/22 0022.
 */

(function () {

    var box = document.getElementById("box");
    var bgImg = document.getElementsByClassName("bgImg");
    var olia = bgImg.getElementsByTagName("li");
    var btn = document.getElementsByClassName("btn");
    var oli = btn.getElementsByTagName("li");
    var oStyle = document.getElementById("oStyle");

    var number = 30;
    var oliWidth = olia.clientWidth / number;
    var oliaStyle = "";
    var olis = "";

    for (var i = 0; i < number; i++) {
        olis += "<li><a></a><a></a><a></a><a></a></li>";
        oliaStyle += ".bgImg li a:nth-child(" + (i + 1) + "）{background-position:-" + i * oliWidth + "px}";
    }

    bgImg.innerHTML = olis;
    oStyle.innerHTML += oliaStyle;

    for (var i = 0; i < uim; i++) {
        //每一个的宽度都是oliwidth
        olia[i].style.width = oliWidth + "px";
        // console.log(oli);
    }
    for (var i = 0; i < akey.length; i++) {
        olia[i].index = i;
        //akey[i]  4个<li></li>
        //i==li的下标  0,1,2,3
        // console.log(i);
        olia[i].onclick = function () {
            for (var j = 0; j < number; j++) {
                //每个隔50毫秒出现
                olia[j].style.transition = 500 + j * 50 + "ms";
                olia[j].style.transform = "rotateX(" + this.index * 90 + "deg)";
            }
        }
    }

})();