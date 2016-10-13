/**
 * Created by Administrator on 2016/10/12 0012.
 */

//网站：json.org

(function () {

    // //json是【字符串】格式
    //
    // var jsonStr = "[1,2,3，\"Hello World\"]";
    // // console.log(jsonStr);  输出字符串【1,2,3】
    //
    // //字符串转化成对象
    // var json = JSON.parse(jsonStr);
    //
    // console.log(json);  //输出数组

    var jsonStr = "[{\"name\":\"王小岁\"},1,2,3,\"Hello World\",[\"ucai\",\"学院\"]]";

    // var jsonStr = "{\"name\":\"ucai\"}";

    var json = JSON.parse(jsonStr);

    console.log(JSON.stringify(json));

})();