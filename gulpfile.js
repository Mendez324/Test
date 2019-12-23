"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');


 gulp.task("default", ()=>{
    gulp.task("styles","watch")
 })
 
gulp.task('styles', function () {
    return gulp
        .src('scss/main.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});


