/**
 * Created by Administrator on 2016/11/7 0007.
 */

(function () {

    //整个页面下的div
    var registerAlertDiv = $("#register").find(".alert-div");
    var loginAlertDiv = $("#login").find(".alert-div");

    //注册页面的form表单
    $("#form-register").submit(function (e) {
        e.preventDefault();

        var pass = this['pass'].value;
        var confirm = this['confirm'].value;

        if (pass != confirm) {
            alert("确认密码不一致");
            return;
        }

        registerAlertDiv.html("正在连接服务器...");
        $.post("/apis/user/register", {
            user: this['user'].value,
            pass: md5(this['pass'].value)
        }).done(function (data) {
            console.log(data);

            switch (data.state) {
                case 1:
                    registerAlertDiv.html("注册成功");
                    break;
                case 1062:
                    registerAlertDiv.html("用户名已被占用");
                    break;
                default:
                    registerAlertDiv.html("注册失败");
                    break;
            }
        }).fail(function () {
            registerAlertDiv.html("无法连接服务器");
        });
    });

    $("#form-login").submit(function (e) {
        e.preventDefault();

        loginAlertDiv.html("正在连接服务器...");
        $.post("/apis/user/login", {
            user: this['user'].value,
            pass: md5(this['pass'].value)
        }).done(function (data) {
            console.log(data);
            switch (data.state) {
                case 1:
                    loginAlertDiv.html("登陆成功");
                    break;
                case 5:
                case 6:
                    loginAlertDiv.html("用户名或密码错误");
                    break;
                default:
                    loginAlertDiv.html("登陆失败");
                    break;
            }
        }).fail(function () {
            loginAlertDiv.html("无法连接服务器");
        });
    });
})();