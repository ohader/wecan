module.exports = function(grunt) {

    grunt.initConfig({
        bower: {
            export: {
                base: 'bower_components',
                dest: 'www/vendor',
                options: {
                    checkExistence: true,
                    debugging: true
                }
            }
        }
    });

    grunt.loadNpmTasks('main-bower-files');
    grunt.registerTask('default', ['bower']);

};