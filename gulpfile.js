

'use strict'

// 1.LESS 变异 压缩 合并

//在 gulpfile中先载入gulp包，因为这个用一些api
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

// less 编译 压缩 合并 
gulp.task('style',function() {
	// body...这里实在执行style任务时自动执行的
	gulp.src(['src/styles/*.less','!src/styles/_*.less'])
	.pipe(less())
	.pipe(cssnano())
	.pipe(gulp.dest('dist/styles'));

});


var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//js合并 压缩 混淆
gulp.task('script',function(){
	gulp.src('src/scripts/*.js')
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/scripts'));
});

//图片复制
gulp.task('image',function(){
	gulp.src('src/images/*.*')
		.pipe(gulp.dest('dist/images'));
});

//html压缩
var htmlmin = require('gulp-htmlmin');
gulp.task('html',function(){
	gulp.src('src/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'));
});



var browserSync = require('browser-sync');
gulp.task('serve',function(){
	
});