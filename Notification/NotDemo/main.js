/**
 * Created by Administrator on 2016/10/28 0028.
 */

(function () {

    function addEvent() {
        var input = document.querySelector("#input");
        var btn = document.querySelector("#button");

        input.addEventListener("focus", function () {
            this.value = "";
        });

        var tag = 0;
        btn.addEventListener("click", function () {
            var info = {title: "注意", body: input.value, tag: tag++, icon: "icon.png"};
            input.value = "填写提醒内容";

            pushNot(info, 3);
        });
    }

    function pushNot(info, delay) {

        //判断浏览器是不是支持  通知
        if (Notification) {

            //如果没有授权
            if (Notification.permission !== "granted") {

                //请求授权
                Notification.requestPermission(function (status) {
                    //    更新授权的状态
                    Notification.permission = status;
                });

                return;
            }

            var config = {body: info.body, icon: info.icon, tag: info.tag};
            var not = new Notification(info.title, config);

            setTimeout(function () {
                not.close();
            }, delay * 1000);


            not.addEventListener("click", function () {
                var message = encodeURIComponent(this.body);
                open("index2.html?" + message + "");
            });


        } else {
            alert("浏览器不支持");
        }

    }

    addEvent();
})();
