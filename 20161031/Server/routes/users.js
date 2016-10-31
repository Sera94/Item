var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//users/hello 不区分大小写
router.get("/hello", function (req, res) {
    res.send("Hello");
});

router.get("/c/d", function (req, res) {
    res.send("cd");
});

module.exports = router;
