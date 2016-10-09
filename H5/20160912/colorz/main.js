(function () {

    var ranges = document.querySelectorAll(".range");
    var dates = document.querySelectorAll(".date");
    // var btn = document.querySelector("#btn");
    var container = document.querySelector("#container");
    var rgb = [0,0,0];

    for (var i=0,j=ranges.length;i<j;i++) {
        (function (i) {
            //在用户输入时触发
            ranges[i].oninput = function () {
                dates[i].value = this.value;
                rgb[i]=this.value;
               changeColor();
            }
        })(i)
    }

    // btn.onclick = function () {
    //     for (var i=0,j=ranges.length;i<j;i++) {
    //         dates[i].value < 0 && (dates[i].value = 0);
    //         dates[i].value >255 && (dates[i].value = 255);
    //         ranges[i].value = dates[i].value;
    //         rgb[i] = dates[i].value;
    //     }
    //     changeColor();
    // }

    function changeColor() {
        container.style.background = "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";
    }


})();