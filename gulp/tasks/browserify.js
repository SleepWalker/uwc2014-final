var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var gulpif = require('gulp-if');

// TODO: Логирование https://github.com/greypants/gulp-starter/blob/master/gulp/tasks/browserify.js

module.exports = function(options) {
    var opts = watchify.args;
    opts.debug = !options._options.isProduction;
    var bundler = watchify(browserify('./src/js/index.js', opts));

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
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('app.min.js'))
        .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object, to get uglify working
        .pipe(gulpif(options._options.isProduction, uglify())) // only minify in production
        .pipe(gulp.dest(options._options.distPath+'/js'));
    }

    return rebundle();
};