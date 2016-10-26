/**
 * Created by Administrator on 2016/10/26 0026.
 */

var button = document.getElementById("getLocation");
button.onclick = function () {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
        });
    }
};



function showMap() {
    var googleMap = google.maps;

//Map(父元素，地图的配置信息) -> 地图的对象
    var mapContainer = document.getElementById("mapContainer");
//地图的配置信息
//center：地图的中心点 地理position （LatLng）
//zoom:地图的默认的缩放比例 缩放比例越小 加载的内容越全  比例越大 看到的内容越详细  number
//mapTypeId:地图的样式

//latitude:36.2048239
//longitude:138.252924
// googleMap.MapTypeId

    var latLng = new googleMap.LatLng(36.2048239,138.252924);

    var controlOptions = {style:googleMap.MapTypeControlStyle.DROPDOWN_MENU,position:googleMap.ControlPosition.BOTTOM_LEFT};
    var mapSetting = {center:latLng,zoom:15,mapTypeId:googleMap.MapTypeId.HYBRID,disableDefaultUI:true,mapTypeControl:true,mapTypeControlOptions:controlOptions};
    var map = new googleMap.Map(mapContainer,mapSetting);

    //必须有的一个配置 经纬度(position)
    //map:map
    var markSetting = {position:latLng,animation:googleMap.Animation.BOUNCE,icon:"icon.png"};
    var marker = new googleMap.Marker(markSetting);
//    显示在地图上
//    1.写在配置信息
//    2.setMap
    marker.setMap(map);

    //InfoWindow
    var content = "<h3>标题</h3><div><img src='icon.png' alt=''><a href='#'>点击查看详细内容</a></div>"
    var info = {content:content};
    var infoWindow = new googleMap.InfoWindow(info);

    googleMap.event.addListener(marker,"click",function () {
        // alert("");
        infoWindow.open(map,marker);
    });
}

showMap();




