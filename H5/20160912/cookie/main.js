/**
 * Created by Administrator on 2016/9/12 0012.
 */

(function () {

    // document.onclick = function (ev) {
    //     //兼容问题
    //     var oevent = ev || event;
    //     if (sessionStorage.num) {
    //         sessionStorage.num = Number(sessionStorage.num) + 1;
    //     } else {
    //         sessionStorage.num = 1;
    //     }
    // }

    //cookie里只能输出一个
    // document.cookie = "UserName=lixiaojun;UserID = 18";
    // // document.cookie = "UserID = 18";
    // // document.cookie = "Users = la";
    // var strcookie = document.cookie;
    // //分割生成数组
    // var arrcookie = strcookie.split(";");
    // // console.log(arrcookie);
    // var username;
    // for(var i=0;i<arrcookie.length;i++){
    //     var arr =arrcookie[i].split("=");
    //     if("UserName"==arr[0]){
    //         username = arr[1];
    //         break;
    //     }
    // }
    // console.log(username);
    
    
    
    
//    检测存不存在cookie
    function checkchookie(name) {
        var c = document.cookie.indexOf(name);
        if (c != -1) {
            return true;
        } else {
            return false;
        }
    }

//    添加一条数据
    function addcookie(name, value, time) {
        // escape对字符串进行编码，这样就可以在所有的计算机上读取该字符串
        var str = name + "=" + escape(value);
        if (time > 0) {
            var date = new Date();
            //改成毫秒数
            var ms = time * 24 * 3600 * 1000;
            // setTime 以毫秒设置 Date 对象
            // getTime 可返回距 1970 年 1 月 1 日之间的毫秒数
            date.setTime(date.getTime() + ms);
            //可以在cookie的expires中输出时间
            // toGMTString 可根据格林威治时间 (GMT) 把 Date 对象转换为字符串，并返回结果
            str += ";expires=" + date.toGMTString();
            document.cookie = str;
        }
    }

    addcookie("userid", 4, 3);
    // addcookie("userid", 9, 4);

    //删除一条cookie
    function delcookie(name) {
        var exp = new Date;
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null) {
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        }
    }

    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }


})();