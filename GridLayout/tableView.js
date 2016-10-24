
window.curProject = window.curProject||{};

(function () {

    function TableView() {}

    TableView.prototype.loadData = function (data,superEle) {
        if (superEle.children("#tableView").length!=0){
            superEle.empty();
        }
        var tableView = $("<div class='list-group' id='tableView'></div>");
        for (var i=0;i<data.length;i++){
            tableView.append($("<a href='#' class='list-group-item'><h1>"+data[i].title+"</h1><p>"+data[i].content+"</p></a>"));
        }
        superEle.append(tableView);
    };

    curProject.TableView = TableView;
})();