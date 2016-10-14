var arr = [];
    //获取节点
    var randomStr = document.querySelector("#checkStr+a");
    var userName = document.querySelector("#username");
    var password = document.querySelector("#password");
    var checkPassword = document.querySelector("#checkPassword");
    var phone = document.querySelector("#phone");
    var checkStr = document.querySelector("#checkStr");
    var checkPhoneNum = document.querySelector("#checkPhoneNum");
    var check = document.querySelector("#check");
    var sendNum = document.querySelector("#checkPhoneNum+a");

    //--------------------------------校验函数------------------------------------//

    //是否同意协议
    function checkAgreementFn() {
        if (check.checked) return true;
        alert("需要同意协议才可注册！");
        return false
    }

    //校验用户名
    function checkUserNameFn() {
        var name = userName.value;
        if (name.length >=6 && name.length<=9) {
            var result = /[^_\d]\w+/.exec(name);
            if (result) return true;
        }
        alert("用户名长度为6-9，必须以字母开头，且只能用大小写字母、数字和下划线！");
        return false;
    }

    //校验密码
    function checkPasswordFn() {
        var pas1 =password.value;
        if (pas1.length >=6 && pas1.length <= 16) {
            //匹配是否有空白符
            var result = /\s/.exec(pas1);
            if(!result){
                //校验是否有数字和字母
                var haveNum = /\d/.exec(pas1);
                var haveLetter = /[a-zA-Z]/.exec(pas1);
                if (haveNum && haveLetter) {
                    //校验两次密码是否一致
                    var pas2 = checkPassword.value;
                    if (pas1 === pas2) return true;
                    alert("两次密码不一致！");
                    return false;
                }
            }
        }
        alert("密码长度6-16位，必须包含数字和字母，且不能包含空白符！");
        return false;
    }

    //校验手机号
    function checkPhoneFn() {
        var ph = phone.value;
        if (ph.length ===11) {
            //手机号必须以1开头，第二位为3578，其余9为为数字
            var result = /^1[3578]\d{9}/.exec(ph);
            if (result) return true;
        }
        alert("请填写正确的手机号！");
        return false;
    }
    
    //校验字符验证码
    function checkStrFn() {
        var str1 = checkStr.value;
        var str2 = randomStr.innerHTML;
        if (str1 == str2) return true;
        alert("验证码错误！");
        setCheckStrFn();
        return false;
    }

    // 校验手机验证码
    function checkPhoneNumFn() {
        var num = checkPhoneNum.value;
        if (num.length == 6) {
            var result = /\d{6}/.exec(num);
            if (result) return true;
        }
        alert("手机验证码错误！");
        return false;
    }

    //表单验证
    function checkFormFn() {
        //按顺序校验表单内容;
        return checkAgreementFn() &&
            checkUserNameFn() &&
            checkPasswordFn() &&
            checkPhoneFn() &&
            checkStrFn() &&
            checkPhoneNumFn() &&
            alert("提交成功！");
    }

    //发送验证码
    function sendNumFn() {
        checkPhoneFn() //&& 发送验证码;
    }

    //-------------------------------初始化数据--------------------------------//

    //初始化验证码数组 A-Z,a-z
    function initCheckNumArrFn() {
        for (var i=65;i<=90;i++) {
            arr.push(String.fromCharCode(i));
            arr.push(String.fromCharCode(i+32));
        }
    }

    //随机生成验证码
    function setCheckStrFn() {
        var str = "";
        for(var i=0;i<4;i++) {
            str += arr[Math.floor(Math.random()*arr.length)];
        }
        randomStr.innerHTML = str;
    }

    //初始化函数
    function initFn() {
        initCheckNumArrFn();
        setCheckStrFn();
        randomStr.onclick = setCheckStrFn;
        sendNum.onclick = sendNumFn;
    }
    initFn();