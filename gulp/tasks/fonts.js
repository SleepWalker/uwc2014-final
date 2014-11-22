var gulp = require('gulp');

module.exports = function(options) {
    return gulp.src('src/fonts/**')
    .pipe(gulp.dest(options._options.distPath+'/fonts'));
};