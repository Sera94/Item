/**
 * Created by Administrator on 2016/10/11 0011.
 */

(function () {

    var form = document.querySelector("form");
    var storage = localStorage;
    var dataContainer = document.querySelector("#data-container");
    var list;
    var btnClearData = document.querySelector("#btn-clear-data");

    function addListeners() {
        form.addEventListener("submit", function (e) {
            //该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）
            //submit在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单
            e.preventDefault();

            //“key”指input里面的name？ 即键名和键值的值
            var key = this["key"].value;
            var value = this["value"].value;
            console.log(key, value);

            storage.setItem(key, value);

            // refreshStorageData();
        });

        btnClearData.addEventListener("click", function () {
            storage.clear();
            // refreshStorageData();
        });
    }

    function refreshStorageData() {
        //refresh the table

        list.clearData();

        var key;
        for (var i = 0; i < storage.length; i++) {
            key = storage.key(i);
            list.addItem(new ListItem(key, storage.getItem(key)));
        }
    }

    function createTable() {
        list = new List();
        list.onDeleteItem = function (listItem) {
            storage.removeItem(listItem.key);
            refreshStorageData();
        };
        dataContainer.appendChild(list.getHtmlNode());
    }

    function init() {
        createTable();
        addListeners();

        refreshStorageData();
    }

    init();
})();