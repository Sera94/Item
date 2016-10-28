/**
 * Created by Administrator on 2016/10/28 0028.
 */

//判断浏览器是否支持  通知  Notification
if (Notification) {
    console.log("支持");

    //查看用户是否  允许弹出通知
    console.log(Notification.permission);

    //上输出default 用户还未被询问是否授权 所以通知不会被显示
    //所以请求用户授权 弹出通知  需要一个回调方法 得到一个状态的字符串
    Notification.requestPermission(function (status) {
        console.log(status);//输出granted 用户授予显示通知的权限

        //更新通知的授权状态
        Notification.permission = status;
    });

    // 创建通知的构造函数 Notification(title,ops);   ops可选
    var config = {
        body: "明天周末！",
        icon: "icon.png",
        tag: 0,
        dir: "rtl",
        alert: "http://data3.huiyi8.com/2015/dqd/07/31/4.mp3"
    };
    var not = new Notification("标题", config);
    not.onclick = function () {
        console.log("点击哦vv");
        this.close();
        console.log(not);
        console.log(not.body);
    }
    not.onShow = function () {
        console.log("显示");
    }

} else {
    console.log("不支持");
}