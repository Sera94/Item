/**
 * Created by Administrator on 2016/11/2 0002.
 */

(function () {

    var resultDiv = document.querySelector("#result");
    var userForm = document.querySelector("#user-form");
    // userForm.addEventListener("submit", function (e) {
    //     e.preventDefault();
    //     // console.log(this['user'].value);
    //
    //     var xhr = new XMLHttpRequest();
    //     xhr.onload = function () {
    //         resultDiv.innerHTML = xhr.responseText;
    //     };
    //
    //     //GET方式
    //     // xhr.open("GET", "/hello?user=" + this['user'].value);
    //     // xhr.send();
    //
    //     //http://localhost:3000/hello?user=123  也可以输出数据
    //
    //     //POST URL参数方式  不能传文件
    //     // xhr.open("POST", "/hello");
    //     // //不加这句话，result输出的是hello undefined
    //     // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    //     // xhr.send("user=" + this['user'].value);
    //
    //     //POST FormData方式   表单数据传输   可以用来传输文件及二进制数据
    //     // xhr.open("POST", "/upload");
    //     // // var fd = new FormData();
    //     // // fd.append("user", this['user'].value);
    //     // // fd.append("age", this['age'].value);
    //     //
    //     // var fd = new FormData(this);
    //     //
    //     // xhr.send(fd);
    //
    //     //POST JSON  往服务器传输JSON格式数据
    //     xhr.open("POST", "/hello.json");
    //     xhr.send(JSON.stringify({user: this['user'].value, age: this['age'].value}));
    //
    // })

    userForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
            console.log(xhr.response);
            resultDiv.innerHTML = xhr.response.message;
            // console.log(JSON.parse(xhr.responseText));
        });

        xhr.responseType = "json";
        xhr.open("POST", "/hello.json");
        xhr.send(JSON.stringify({user: this['user'].value, age: this['age'].value}));
    })


})();