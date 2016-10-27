/**
 * Created by Administrator on 2016/10/27 0027.
 */

// var options = {minZoom: 3, maxZoom: 15, enableMapClick: false};
//
// var map = new BMap.Map("map", options);
// map.centerAndZoom("杭州", 10);
//
//
// //启用滚轮放大缩小
// map.enableScrollWheelZoom();
//
// //经纬度 显示地图显示范围
// // var location1 = new BMap.Point(116.027143, 39.772348);
// // var location2 = new BMap.Point(16.832025, 40.126349);
// // var bounds = new BMap.Bounds(location1, location2);
// // BMapLib.AreaRestriction.setBounds(map, bounds);
//
//
// setTimeout(function () {
//     // var point = new BMap.Point(116.4035,39.915);
//     // map.panTo(point);
//
//     //将视图切换到制定的缩放等级
//     map.setZoom(15);
//     //启用地图拖拽，默认启用
//     map.enableDragging();
//
//     var curBounds = map.getBounds();
//     console.log(curBounds.Ll);
//     //
//     // console.log(curBounds.getSouthWest());
//     // var leftBottom = curBounds.getSouthWest();
//     // var rightTop = curBounds.getNorthEast();
//     // console.log("左下角地理位置：" + leftBottom.lng + "," + leftBottom.lat + " 右上角地理位置：" + rightTop.lng + "," + rightTop.lat + "");
//     //
//     // //返回两点之间的距离 单位米
//     // var m = map.getDistance(location1, location2);
//     // //精确到小数点后三位
//     // console.log(m.toFixed(3));
//
//     // var location = new BMap.Geolocation();
//     // location.getCurrentPosition(function (ioc) {
//     //
//     //     if(this.getStatus()===BMP)
//     //     console.log(ioc.point);
//     //     map.panTo();
//     // })
//
//
//     var location = new BMap.LocalCity();
//     location.get(function (result) {
//         console.log(result);
//         console.log(result.name);
//         console.log(result.center.lat, result.center.lng);
//     });
//
//
//     // var coder = new BMap.Geocoder();
//     // //地理编码
//     // coder.getPoint("萧山",function (result) {
//     //     console.log(result);
//     // },"杭州");
//
//     //反地理编码
//     // coder.getLocation(location1,function (result) {
//     //     console.log(result.address,result.addressComponents);
//     // });
//
//     var marker = new BMap.Marker(120.125222, 30.259411);
//     map.addOverlay(marker);
//
// }, 4000);

