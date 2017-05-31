var gulp = require('gulp');
var minify = require('gulp-minify');
var Q = require('q');
var uglify = require('gulp-uglify');
var combiner = require('stream-combiner2');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var templatecache = require('gulp-angular-templatecache');  
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');


gulp.task('browser-sync', function() {
browserSync.init({
  server: {
    baseDir : "./public"
  }   
});
});

gulp.task('serve-dev', ['build-css-html', 'build-js-dev', 'templateCache'], function() {
  gulp.start(['injectTask','shorthand']);
  gulp.start('shorthand');
});
gulp.task('serve-prod', ['build-css-html', 'build-js', 'templateCache']);

gulp.task('shorthand', shell.task([
  'npm start'
]))

gulp.task('build-js-dev', function() {
  return gulp
 .src(['app/app.js', 'app/newapp.js', 'app/**/*.js'])
 .pipe(sourcemaps.init())
 .pipe(concat('bundle.js'))
 .pipe(sourcemaps.write())
 .pipe(gulp.dest('public'));
});


gulp.task('build-js', function() {
 gulp.src(['app/app.js', 'app/newapp.js', 'app/**/*.js'])
 .pipe(sourcemaps.init())
 .pipe(concat('bundle.js'))
 .pipe(minify())
 .pipe(uglify())
 .pipe(sourcemaps.write())
 .pipe(gulp.dest('public'))
});

gulp.task('build-css-html', function() {
  var stream = gulp.src(['app/*.css', 'index.html', 'app/**/*.html','app/***/**.html'])
   .pipe(sourcemaps.init())
   .pipe(minify())
   .pipe(sourcemaps.write())
  .pipe(gulp.dest('public'));
});

var watcher = gulp.watch(['app/*.js', 'app/*.css'], ['build-css-html','build-js']);

watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
})

gulp.task('injectTask', function(test) {
  gulp.src('./public/index.html')
  .pipe(inject(gulp.src(['./public/**/*.js', './public/**/*.css', '!public/**/*-min.js'], {read:false}), {relative:true}))
  .pipe(gulp.dest('./public'));
});

gulp.task('templateCache',function() {
  return gulp
  .src('app/**/*.html')
  .pipe(templatecache())
  .pipe(gulp.dest('public'));
}); 

gulp.task('useref', function() {
  gulp.src('public/index.html')
  .pipe(useref())
  .pipe(gulp.dest('dist'));
})