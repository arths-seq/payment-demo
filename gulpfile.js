var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');
var handlebars = require('gulp-handlebars');
var sass = require('gulp-sass');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');

/*
Gulp task to compile Templates files
*/
gulp.task('templates', function(){
  return gulp.src('./templates/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'Payments.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./templates/'));
});

/*
Gulp task to compile Sass files
*/
gulp.task('sass', function () {
  return gulp.src('./styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles'));
});

/*
Gulp task to compile JavaScripts
*/
gulp.task('minify-scripts', function() {
  gulp.src(['./js/*.js'])
    .pipe(concat('payment.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./prod-build/'));

    gulp.src(['./vendor/*.js'])
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./prod-build/'));
});

/*
Gulp task to compile CSS
*/
gulp.task('minify-css', function () {
  return gulp.src('./styles/*.css')
    .pipe(concat('payment.min.css'))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./prod-build/'));
});

/*
Gulp task to compile Development build
*/
gulp.task('dev-build',['sass','templates']);

/*
Gulp task to compile Production build
*/
gulp.task('prod-build',['sass'],function(){
  //gulp.task(['minify-scripts','minify-css','templates']);
  //runSequence('clean', ['minify-scripts','minify-css','templates']);
  return gulp .run(['minify-scripts','minify-css','templates']);
});

/*
Gulp task to compile on each file change
*/
gulp.task('watch',function(){
  //gulp.watch('./js/*.js', ['scripts']);
  gulp.watch('./styles/*.scss', ['sass']);
  gulp.watch('./templates/*.hbs', ['templates']);
});