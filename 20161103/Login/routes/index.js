var express = require('express');
var router = express.Router();
const mysql = require("mysql");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post("/login", function (req, res) {

    var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "login"
    });

    conn.connect(function (err) {
        if (!err) {
            conn.query("INSERT INTO `users` (`user`,`email`,`pass`) VALUES (?,?,?)",
                [req.body.user, req.body.email, req.body.pass], function (err) {
                    if (!err) {
                        res.json({state: 1});
                    } else {
                        res.json({state: 5});
                    }
                });
        } else {
            res.json({state: 4});
        }
    });

});

module.exports = router;
