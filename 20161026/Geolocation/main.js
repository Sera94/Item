/**
 * Created by Administrator on 2016/10/26 0026.
 */

function getLocation() {

//  判断浏览器是否支持 获取位置信息
    if (navigator.geolocation) {
        alert("支持");

        //获得用户位置信息
        navigator.geolocation.getCurrentPosition(success, fail);

        //    观察用户位置 会有一个number类型的返回值
        var watchID = navigator.geolocation.watchPosition(success, fail);

        // //清除观察用户的位置
        // navigator.geolocation.clearWatch(watchID);

    } else {
        alert("不支持");
    }

}

//获取位置成功的回调
function success(position) {
    alert(position);

//    经纬度
    alert(position.coords.longitude, position.coords.latitude);

//    定位的时间
    var date = new Date(position.timestamp);
    // date.getDate(position.timestamp);
    alert(date);
}

//获取用户位置 失败的时候的回调
function fail(error) {
    alert(error.code);
}