var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var scripts = [
  'bower_components/jquery/dist/jquery.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-route/angular-route.js',
  'bower_components/bootstrap/dist/js/bootstrap.js',
  'src/app.js',
  'src/common/**/*.js',
  'src/app/**/*.js'
];

var cssFiles = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css',
  'build/styles/style.css'
];

var stylusFiles = [
  'src/app/**/*.styl'
];

var jadeFiles = [
  'src/app/**/*.jade'
];

gulp.task('scripts:concat', function () {
  return gulp.src(scripts)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('stylus', function () {
  return gulp.src(stylusFiles)
    .pipe(concat('style.styl'))
    .pipe(stylus())
    .pipe(gulp.dest('build/styles'));
});

gulp.task('css:concat', ['stylus'], function () {
  return gulp.src(cssFiles)
    .pipe(concat('style.css'))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('jade:index', function () {
  return gulp.src(['src/index.jade'])
    .pipe(jade())
    .pipe(gulp.dest('build/'));
});

gulp.task('jade:templates', function () {
  return gulp.src(jadeFiles)
    .pipe(jade({
      expand: false
    }))
    .pipe(gulp.dest('build/views'));
});

gulp.task('default', [
  'scripts:concat',
  'css:concat',
  'jade:index',
  'jade:templates'
]);

