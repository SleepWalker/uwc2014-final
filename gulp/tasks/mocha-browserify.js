var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');

module.exports = function(options) {
  var bundler = watchify(browserify('./test/test.js', watchify.args));

  // Optionally, you can apply transforms
  // and other configuration options on the
  // bundler just as you would with browserify
  bundler.transform('browserify-shim');
  bundler.transform('browserify-handlebars');
  // bundler.transform('debowerify');

  bundler.on('update', rebundle);

  function rebundle() {
    return bundler.bundle()
      // log errors if they happen
      .on('error', gutil.log.bind(gutil, 'Mocha Browserify Error'))
      .pipe(source('test.bundle.js'))
      .pipe(gulp.dest('./test'));
  }

  return rebundle();
};