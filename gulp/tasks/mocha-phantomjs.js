var gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');


module.exports = function (options) {
    return gulp
        .src('test/runner.html')
        .pipe(mochaPhantomJS({
            reporter: 'spec',
        }));
};
