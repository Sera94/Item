/**
 * Created by Administrator on 2016/9/20 0020.
 */
(function () {
    var myCanvas=document.querySelector("#myCanvas");
    var context=myCanvas.getContext("2d");



    function draw() {
        var now=new Date();
        var hou=now.getHours();
        var min=now.getMinutes();
        var sec=now.getSeconds();
        //画分针刻度
        for(var i=0;i<60;i++){
            context.beginPath();
            context.moveTo(250,250);
            context.arc(250,250,200,i*6*Math.PI/180,(i+1)*6*Math.PI/180);
            context.stroke();
            context.closePath();
        }
        context.beginPath();
        context.moveTo(250,250);
        context.arc(250,250,190,0,360*Math.PI/180);
        context.fillStyle="#fff";
        context.fill();
        context.closePath();

        //画时针刻度
        for(var j=0;j<12;j++){
            context.beginPath();
            context.lineWidth=3;
            context.moveTo(250,250);
            context.arc(250,250,200,j*30*Math.PI/180,(j+1)*30*Math.PI/180);
            context.stroke();
            context.closePath();
        }
        context.beginPath();
        context.moveTo(250,250);
        context.arc(250,250,180,0,360*Math.PI/180);
        context.fillStyle="#eee";
        context.fill();
        context.closePath();


        //画指针
        context.beginPath();
        context.lineWidth=5;
        context.moveTo(250,250);
        context.arc(250,250,120,((hou+min/60)*30-90)*Math.PI/180,((hou+min/60)*30-90)*Math.PI/180);
        context.strokeStyle="#000";
        context.stroke();
        context.closePath();

        context.beginPath();
        context.lineWidth=3;
        context.moveTo(250,250);
        context.arc(250,250,150,(min*6-90)*Math.PI/180,(min*6-90)*Math.PI/180);
        context.strokeStyle="#000";
        context.stroke();
        context.closePath();

        context.beginPath();
        context.lineWidth=1;
        context.moveTo(250,250);
        context.arc(250,250,180,(sec*6-90)*Math.PI/180,(sec*6-90)*Math.PI/180);
        context.strokeStyle="#000";
        context.stroke();
        context.closePath();

        context.beginPath();
        context.font="30px 微软雅黑";
        context.strokeStyle="#000";
        context.strokeText(changeForm(hou)+":"+changeForm(min)+":"+changeForm(sec),190,400);
        context.closePath();
    }
    function changeForm(n) {
        n=n>=10?n:"0"+n;
        return n;
    }
    draw();
    setInterval(draw,1000);
})();