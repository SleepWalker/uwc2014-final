var gulp = require('gulp');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

module.exports = function(options) {
    options = Object.create(options, {'for': {
        value: {
            'compass': 'src/sass/**',
            'imagemin': 'src/images/**',
            'fonts': 'src/fonts/**',
            'mocha-phantomjs': ['src/js/**', 'test/**'],
            'browserify': ['*.{html,php}', 'css/**/*.css', 'js/**/*.js', 'images/**/*.js']
        }
    }});

    for(var task in options.for) {
        if(task == 'browserify') {
            gulp.watch(options.for[task], reload);
            continue;
        }
        gulp.watch(options.for[task], [task]);
    }
};
