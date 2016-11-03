
(function () {

    function Game() {
        //初始的行数
        var rowNum = 2;
        //游戏的背景图
        var backgroundView;

        //创建游戏界面
        function createView() {

            backgroundView = document.createElement("div");
            backgroundView.id = "backgroundView";
            document.body.appendChild(backgroundView);

            // 颜色的数组
            var colors = ["#9E413B","#33539E","#9E1A8D","#259E2D"];
            //随机抽选颜色
            var arcColorIndex = parseInt(Math.random()*100)%colors.length;

            //色块的数量：行数*行数
            var colorViewNum = rowNum*rowNum;

            // 随机的色块标识
            var specialColorViewID = parseInt(Math.random()*10000)%colorViewNum;

            for (var i=0;i<colorViewNum;i++){
                //创建色块
                var colorView = ColorView(rowNum,colors[arcColorIndex],1.0);
                backgroundView.appendChild(colorView);

                //找到特殊的色块 给他一个点击事件
                if (i===specialColorViewID){
                    colorView.style.opacity = 0.7;
                    colorView.onclick = function () {
                        success();
                    };
                }else {
                    // 普通色块的点击事件
                    colorView.onclick = function () {
                        failed();
                    };
                }
            }
        }

        //成功
        function success() {
            // 让行数+1
            rowNum++;
           finish();
        }
        //失败
        function failed() {
            // 让行数重置
            rowNum = 2;
            finish();
        }
        //游戏完成
        function finish() {
            // 替换上一个界面
            //移除
            document.body.removeChild(backgroundView);
            //重新加载游戏界面
            createView();
        }

        createView();
    }

    window.Game = Game;
})();
