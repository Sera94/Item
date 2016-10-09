/**
 * Created by Administrator on 2016/9/12 0012.
 */

(function () {

// 	var range = document.querySelector(".range");
//     var range1 = document.querySelector(".range1");
//     var range2 = document.querySelector(".range2");
//     var range3 = document.querySelector(".range3");
//     var number1 = document.querySelector(".number1");
//     var number2 = document.querySelector(".number2");
//     var number3 = document.querySelector(".number3");
//     var container = document.querySelector("#container");
//
//     range1.addEventListener("change", function () {
//         number1.value = range1.value;
//         // console.log(number1.value);
// //      var a = number1.value;
// //      console.log(a);
//     });
//     range2.addEventListener("change", function () {
//         number2.value = range2.value;
// //      var b = number2.value;
// //      console.log(b);
//         // console.log(number2.value);
//     });
//     range3.addEventListener("change", function () {
//         number3.value = range3.value;
// //      var c = number3.value;
// //      console.log(c);
//         // console.log(number3.value);
//     });
//
//
// 	range.addEventListener("change", function () {
//        var intR,intG,intB,strColor;
//
// 	   intR=range1.value;
// 	   intG=range2.value;
// 	   intB=range3.value;
// 	   strColor="rgb("+intR+","+intG+","+intB+")";
//    container.style.backgroundColor=strColor;
//     });
//


//    改******************************************************************************************

    //1.获取各。。。及背景颜色

    var ranges = document.querySelectorAll(".range");
    var numbers = document.querySelectorAll(".number");
    var container = document.querySelector("#container");
    var rgb = [0, 0, 0];

    for (var i=0,j=ranges.length;i<j;i++) {
        (function (i) {
            //在用户输入时触发
            ranges[i].oninput = function () {
                numbers[i].value = this.value;
                rgb[i]=this.value;
                changeColor();
            }
        })(i)
    }

    function changeColor() {
        container.style.background = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
    }


})();