/**
 * Created by Administrator on 2016/11/10 0010.
 */

const gulp = require('gulp');
const minify = require('gulp-minify');//压缩
const concat = require('gulp-concat');//连接 按顺序连接？

const buildDirName = "build";

// gulp.task('task1', function () {
//     console.log("Hello Gulp");
// });//Terminal中 输gulp task1
//
// // gulp.task('default', function () {
// //     console.log("Run default task");
// // });//输gulp
//
// gulp.task('default', ['task1'], function () {
//     console.log("Run default task");
// });//依赖项 先输出task1 再输出default


//SRC*****************************************************************
//src 原代码  build 目标代码
// gulp.task('default', function () {
//     gulp.src("src/*.html").pipe(gulp.dest("dest"));
// });//创建src/html 输gulp 会把前面的拷贝到dest 即出现dest文件即html


gulp.task("copy_html_files", function () {
    return gulp.src("src/*.html").pipe(gulp.dest(buildDirName));
});

gulp.task("compile_js_files", function () {
    return gulp.src([
        "src/Hello.js",
        "src/Main.js"
    ])
        .pipe(concat("index.js"))//把以上js文件合并到index.js min压缩
        .pipe(minify())
        .pipe(gulp.dest(buildDirName));
});

gulp.task("default", ["copy_html_files", "compile_js_files"]);

//侦听文件的变化并自动编译
//侦听 一直在执行 可以知道文件是否改变 显示也会改变
//执行gulp，改变代码刷新就可以改变  改变代码需要重新gulp
gulp.watch("src/*.html", ["copy_html_files"]);
gulp.watch("src/*.js", ["compile_js_files"]);
