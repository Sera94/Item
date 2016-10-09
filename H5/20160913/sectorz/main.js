(function () {

    var canvas = document.querySelector("#canvas");
    var pen = canvas.getContext("2d");

    // drewSector(0,60,200,"#6be");
    // drewSector(60,160,200,"#f2b6b6");
    // drewSector(160,360,200,"#ffe957");
    var angel = 0,speed = 5;

    var  id = setInterval(function () {
        angel += speed;
        if (angel<=80){
            drewSector(0,angel,200,"#6be");
        }else if(angel<=150) {
            drewSector(80,angel,200,"#f2b6b6");
        }else {
            angel >= 360 && (clearInterval(id));
            drewSector(150,angel,200,"#ffe957");
        }

    },10)





    function drewSector(startAng,endAng,R,color) {
        var startRad = startAng*Math.PI/180;
        var endRad = endAng*Math.PI/180;
        pen.beginPath();
        pen.arc(250,250,R,startRad,endRad);
        pen.lineTo(250,250);
        pen.lineTo(250+Math.cos(startRad),250+Math.sin(startRad));
        pen.fillStyle = color;
        pen.fill();
    }

})();