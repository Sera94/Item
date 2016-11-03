/**
 * Created by Administrator on 2016/11/2 0002.
 */
//创建该路由 在app.js  27行中添加

var express = require('express');
var router = express.Router();
const upload = require("../sources/upload");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post("/upload", upload.single("file"), (req, res)=> {
    res.send(`/uploads/${req.file.filename}`);
});

router.post("/drag", (req, res)=> {
    res.send(`/uploads/${req.body.filename}`);
});


module.exports = router;