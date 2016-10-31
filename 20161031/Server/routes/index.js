var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get("/hello", function (req, res) {
    res.send("Hello World");
});

router.get("/data", function (req, res) {
    // res.jsonp({name: "ucai", age: 10});


    if (req.headers.referer.indexOf("localhost:63343") != -1) {
        console.log(req.headers.referer);
        res.jsonp({name: "ucai", age: 10});
    } else {
        res.send("恶意攻击别人网站可耻");
    }

});

router.get("/data.json", function (req, res) {
    res.json({name: "ucai", age: 10});
});

router.get("/data.js", function (req, res) {
    res.send("callback('Hello World');");
});

router.get("/data.jsonp", function (req, res) {
    var resposeData = "Hello World";
    res.send(`${req.query.callback}("${resposeData}")`);
});

module.exports = router;
