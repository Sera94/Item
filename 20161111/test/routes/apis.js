var express = require('express');
var router = express.Router();
const createConn = require("../sources/MySqlConnection");
const StatusCode = require("../sources/StatusCode");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post("/add", function (req, res) {
    var conn = createConn();
    conn.connect(function (err) {
        if (!err) {
            conn.query("INSERT INTO `users` (`user`,`date`,`number`,`pay`) VALUES (?,?,?,?)",
                [req.body.user, req.body.date, req.body.number, req.body.pay], function (err,data) {
                    if (!err) {
                        res.json({state: 1,data:data});//成功
                    } else {
                        res.json({state: 5});//执行添加语句失败
                    }
                });
        } else {
            res.json({state: StatusCode.FAIL_TO_CONNECT_DB});//添加失败
        }
    })
});

router.get("/delete", function (req, res) {
    var conn = createConn();
    conn.connect(function (err) {
        if (!err) {
            conn.query("DELETE FROM `users` WHERE `id`=?", [req.query.id], function (err) {
                if (!err) {
                    res.json({state: 1});//删除成功
                } else {
                    res.json({state: 3});//执行删除任务时失败
                }
            });
        } else {
            res.json({state: 2});//删除失败
        }
    });

});

module.exports = router;
