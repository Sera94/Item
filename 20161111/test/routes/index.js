var express = require('express');
var router = express.Router();
const createConn=require("../sources/MysqlConnection");

/* GET home page. */
router.get('/', function(req, res, next) {
  var conn = createConn();

  conn.connect(function (err) {
    if (!err) {
      conn.query("SELECT * FROM `users`", function (err, rows) {
        if (!err) {
          res.render("index", {title: "记账本", users: rows});
        } else {
          res.json(err);
        }

        conn.end();
      });
    } else {
      res.json(err);
    }
  });
});

module.exports = router;
