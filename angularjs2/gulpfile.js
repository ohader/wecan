var gulp = require('gulp');
require('gulp-submodule')(gulp);

var moduleGoogleMaps = gulp.submodule('angular2-google-maps');
console.log('Mod returns ' + moduleGoogleMaps);

gulp.task('build', ['mod:build'], function() {
    console.log('building super');
});
