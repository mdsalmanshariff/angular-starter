var gulp = require('gulp');
var minify = require('gulp-minify');
var Q = require('q');
var uglify = require('gulp-uglify');
var combiner = require('stream-combiner2');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('default', ['build-css-html', 'build-js']);


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
