

(function () {
    var tableView = new curProject.TableView();
    var allDatas = [];
    var type = 0;
    var week = 0;

    var httpClient = new curProject.HTTPClient();
    var resultDef = httpClient.requestWithURL("package.json");
    resultDef.done(function (data) {
        console.log(data);
        allDatas = data;
        if (data.length>0){
            tableView.loadData(data[type]["data"][week]["data"],$("#showContent"));
        }
    });

    $(".top-nav").each(function () {
        $(this).bind("click",function () {

            type = $(this).index();
            console.log(type,week);
            //后面点击的时候 前面的固定按钮背景移除
            $("#top-nav-container .active").removeClass("active");
            $(this).addClass("active");
            tableView.loadData(allDatas[type]["data"][week]["data"],$("#showContent"));
        });
    });

    $(".week").each(function () {
        $(this).bind("click",function () {
            week = $(this).index();
            $("#week-container .active").removeClass("active");
            $(this).addClass("active");
            tableView.loadData(allDatas[type]["data"][week]["data"],$("#showContent"));
        });
    });

})();