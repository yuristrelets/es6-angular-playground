'use strict';

var gulp = require('gulp');
var $$ = require('gulp-load-plugins')();

var sources = [
  'app/js/modules/**/*.js',
  'app/js/lib.js',
  'app/js/app.js'
];

gulp.task('watch', function() {
  return gulp.watch(sources, ['traceur']);
});

gulp.task('traceur', function () {
  var
    dest = 'app/dist',
    options = {
      modules: 'register',
      moduleName: true
    },
    append = 'System.get("app");'
    ;

  return gulp.src(sources, {base: './app/js'})
    .pipe($$.sourcemaps.init())
    .pipe($$.traceur(options))
    .pipe($$.concat('all.js'))
    .pipe($$.insert.append(append))
    //.pipe($$.uglify())
    .pipe($$.sourcemaps.write('./maps'))
    .pipe(gulp.dest(dest))
    ;
});