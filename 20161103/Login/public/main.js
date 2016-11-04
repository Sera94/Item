/**
 * Created by Administrator on 2016/11/3 0003.
 */

(function () {

    $("#form-add").submit(function (e) {
        e.preventDefault();

        $.post("/login", {
            user: this["user"].value,
            email: this["email"].value,
            pass: this["pass"].value
        }).done(function (data) {
            console.log(data);

            if (data.state == 1) {
                location.reload();
            }
        });

    });

})();