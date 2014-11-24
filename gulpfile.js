var tasks = {
    'compass': {
        // loadPath: "bower_components/foundation/scss"
    },
    // 'imagemin': {},
    // 'fonts': {},
    'browserify': {},
    'browsersync': {
        // 'host': 'example.com',
        'injectChanges': true,
    },
    'watch': {},
    'mocha-phantomjs': {},
    'mocha-browserify': {},
    };

var gulp = require('./gulp')(tasks);
gulp.task('default', [
    'browsersync',
    'browserify',
    'mocha-browserify',
    'watch'
]);