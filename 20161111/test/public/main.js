/**
 * Created by Administrator on 2016/11/11 0011.
 */

(function () {

    $("#users").find(".delete").click(function (e) {
        //阻止时间默认行为
        e.preventDefault();

        $.get(this.href).done(function (data) {
            console.log(data);
            if (data.state == 1) {
                location.reload();
            } else {
                alert("删除数据失败");
            }
        });

    });

    $("#form-input").submit(function (e) {
        e.preventDefault();

        console.log(this);

        $.post("/apis/add", {
            user: this["user"].value,
            date: this["date"].value,
            number: this["number"].value,
            pay: this["pay"].value
        }).done(function (data) {
            console.log(data);

            if (data.state == 1) {
                console.log(data.data);
                location.reload();
            }
        });
    });

})();