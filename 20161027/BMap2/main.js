/**
 * Created by Administrator on 2016/10/27 0027.
 */

var location1 = new BMap.Point(120.125222, 30.259411);
var map = new BMap.Map("allmap");
map.centerAndZoom(location1, 15);

var mapTypeControl = new BMap.MapTypeControl({
    mapTypes: [BMAP_NORMAL_MAP, BMAP_PERSPECTIVE_MAP],
    anchor: BMAP_ANCHOR_TOP_LEFT
});
map.addControl(mapTypeControl);

var image = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300, 157)
);

var marker = new BMap.Marker(location1, {icon: image, enableDragging: true, title: "123", raiseOnDrag: true});
map.addOverlay(marker);

marker.setAnimation(BMAP_ANIMATION_DROP);

marker.setTitle("123234");
marker.disableDragging();

var location2 = new BMap.Point(120.832025, 30.126349);
marker.setPosition(location1);

marker.addEventListener("click", function () {
    alert("嗨");
});

var locSearch = new BMap.LocalSearch(map, {
    renderOptions: {
        map: map,
        panel: "panel",
        selectFirstResult: false,
        autoViewport: true
    },
    onSearchComplete: function (results) {
        console.log("222", results);
    }
});
locSearch.setPageCapacity(10);
// locSearch.setLocation("石景山");
// locSearch.search("景点");

var bounds = new BMap.Bounds(location1,location2);
// locSearch.searchInBounds("景点",bounds);

locSearch.searchNearby("景点",location1,1000);
// locSearch.setSearchCompleteCallback(function (results) {
//     console.log("1111",results);
// });

var lable = new BMap.Label("1223",{position:location1});
map.addOverlay(lable);
lable.disableMassClear();

var panorama = new BMap.Panorama("panorama");
panorama.setPosition(location1);
panorama.setPov({heading:90,pitch:30});
panorama.show();



