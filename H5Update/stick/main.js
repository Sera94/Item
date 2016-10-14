/**
 * Created by Administrator on 2016/9/19 0019.
 */
(function () {
    var myCanvas=document.querySelector("#canvas");
    var context=myCanvas.getContext("2d");

    var j1x=0,j1y=0,j1h=0,j1w=60;
    var j2x=0,j2y=0,j2h=0,j2w=0;
    var j3x=0,j3y=0,j3h=0,j3w=0;

    var bridgeL=0,bridgeX=60,bridgeY=330;
    var squareX=40,squareY=330,score=0;

    function start() {
         j1x=0,j1y=0,j1h=0,j1w=60;
         j2x=0,j2y=0,j2h=0,j2w=0;
         j3x=0,j3y=0,j3h=0,j3w=0;

         bridgeL=0,bridgeX=60,bridgeY=330;
         squareX=40,squareY=330,score=0;
        
        context.fillStyle="#abcdef";
        context.fillRect(0,0,300,500);

        context.fillStyle="#000";
        context.fillRect(j1x,350,j1w,150);

        j2x=Math.floor(Math.random()*150+20)+j1x+j1w;
        j2w=Math.floor(Math.random()*50+20);
        context.fillRect(j2x,350,j2w,150);

        j3x=Math.floor(Math.random()*150+20)+j2x+j2w;
        j3w=Math.floor(Math.random()*50+20);
        context.fillRect(j3x,350,j3w,150);

        context.fillStyle="#ff0000";
        context.fillRect(squareX,squareY,20,20);


    }

    function doKeyDown(e) {
        var keyCode=e.keyCode||e.which;//e.which兼容火狐
        if(keyCode===32){
            bridgeY=bridgeY-2;
            bridgeL=350-bridgeY;
            context.strokeStyle="#9933cc";
            context.lineWidth=3;
            context.moveTo(squareX+20,squareY+20);
            context.lineTo(bridgeX,bridgeY);
            context.stroke();
        }else if(keyCode===13){
            start();
        }
    }

    function doKeyUp(e) {
        var keyCode=e.keyCode||e.which;
        if(keyCode===32){
            bridgeY=350;
            context.beginPath();
            context.strokeStyle="#000";
            context.lineWidth=4;
            context.moveTo(squareX+20,squareY+20);
            context.lineTo(squareX+20+bridgeL,bridgeY);
            context.stroke();
            
            context.beginPath();
            context.strokeStyle="#abcdef";
            context.lineWidth=10;
            context.moveTo(squareX+18,squareY+20);
            context.lineTo(squareX+18,350-bridgeL);
            context.stroke();
            moveSquare() ;
        }
    }
    function moveSquare() {
        context.beginPath();
        context.strokeStyle="#ABCDEF";
        context.fillStyle="#ABCDEF";
        context.fillRect(squareX,squareY,20,20);
        context.stroke();

        context.beginPath();
        context.strokeStyle="#red";
        context.fillStyle="red";
        squareX=squareX+5;
        context.fillRect(squareX,squareY,20,20);
        context.stroke();

        if(squareX<=bridgeL+j1w-20){
            setTimeout(moveSquare,70);
        }else{
            if(j1w+bridgeL<(j2x+j2w)&&j1w+bridgeL>j2x){
                context.beginPath();
                context.strokeStyle="#ABCDEF";
                context.fillStyle="#ABCDEF";
                context.fillRect(squareX,squareY,20,20);
                context.stroke();

                context.beginPath();
                context.strokeStyle="#ff0000";
                context.fillStyle="#ff0000";
                squareX=j2x+j2w-20;
                context.fillRect(squareX,squareY,20,20);
                context.stroke();
                score++;
                moveAll();
            }else{
                context.beginPath();
                context.fillStyle = "#abcdef";
                context.fillRect(0,0,300,500);
                context.fill();
                context.font="30px 微软雅黑";
                context.fillStyle="#fff";
                context.fillText("GAME OVER!",40,180);

                context.font="30px 微软雅黑";
                context.fillStyle="#ff0000";
                context.fillText("score: "+score,70,240);

                context.font="16px 微软雅黑";
                context.fillStyle="#fff";
                context.fillText("Click on the enter button to start again!",0,320);
            }
        }
    }
function moveAll() {
    context.fillStyle="#abcdef";
    context.fillRect(0,0,300,500);
    context.fillStyle="#000";
    j1x--;
    j2x--;
    j3x--;
    squareX--;
    context.fillRect(j1x,350,j1w,150);
    context.fillRect(j2x,350,j2w,150);
    context.fillRect(j3x,350,j3w,150);

    context.fillStyle="#ff0000";
    context.fillRect(squareX,squareY,20,20);
    scoreNum();
    if(j2x>=0){
        setTimeout(moveAll,3);
    }else{
        change();
    }

}

function change() {
    j1x=j2x;
    j1w=j2w;
    j2x=j3x;
    j2w=j3w;
    j3x=Math.floor(Math.random()*150+20)+j2x+j2w;
    j3w=Math.floor(Math.random()*50+20);
    bridgeX=j1w;
}


    function scoreNum() {
        context.font = "40px 微软雅黑";
        context.fillStyle = "#fff";
        context.fillText("score: "+score, 50, 50);
    }
    start();
    scoreNum();
    window.addEventListener("keydown",doKeyDown);
    window.addEventListener("keyup",doKeyUp);
})();