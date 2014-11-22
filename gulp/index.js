var gulp = require('gulp');
var args = require('yargs').argv;

module.exports = function(tasks) {
    var globalOptions = {
        isProduction: !!args.production
    };

    if(tasks._options) {
        globalOptions = tasks._options;
        delete(tasks._options);
    }

    if(!globalOptions.distPath) {
        globalOptions.distPath = 'dist';
    }

    function wrapTask(task, options) {
        return function() {
            return task(options);
        };
    }

    for(var task in tasks) {
        if(task == '_options') {
            continue;
        }

        console.log('Init task: ' + task);

        var options = tasks[task];
        options._options = globalOptions;
        gulp.task(task, wrapTask(require('./tasks/' + task), options));
    }

    return gulp;
};

// npm install --save-dev require-dir
// var requireDir = require('require-dir');
// var dir = requireDir('./tasks');