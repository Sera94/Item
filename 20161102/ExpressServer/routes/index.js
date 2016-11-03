var express = require('express');
var router = express.Router();

//添加  cnpm install --save multer  是否成功可在package.json中查找是否添加
// const multer = require("multer");
// //图片传输，会在一下路径保存？ 是扩展名去掉了的图片文件
// const upload = multer({dest: "public/uploads"});

const upload = require("../sources/upload");

// /* GET home page. */ 服务器端页面
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/hello', function (req, res) {
    res.send(`Hello ${req.query.user}`);
});

router.post("/hello", function (req, res) {
    // var str = "";
    // req.on("data", function (data) {
    //     str += data;
    // });
    // req.on("end", function () {
    //     console.log(str);
    // });

    res.send(`hello ${req.body.user}`);
});

//upload.none() 只接受上传文本数据
router.post("/upload", upload.none(), function (req, res) {
    res.send(`Hello ${req.body.user},and your age is ${req.body.age}`);
});

router.post("/hello.json", (req, res)=> {
    // let allData = Buffer.alloc(0);
    // req.on("data", data=> {
    //     allData = Buffer.concat([allData, data]);
    // });
    let allData;
    req.on("data", data=> {
        if (allData) {
            allData = Buffer.concat([allData, data]);
        } else {
            allData = data;
        }
    });

    req.on("end", ()=> {
        var obj = JSON.parse(allData.toString());
        res.json({message: `Your name is ${obj.user}, and your age is ${obj.age}`});
    });
});

router.post("/upload.image", upload.single("img"), function (req, res) {
    //render jade""  图片路径
    res.render("UploadImageHandler", {imagePath: `/uploads/${req.file.filename}`});
});

module.exports = router;
