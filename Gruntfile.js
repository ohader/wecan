module.exports = function(grunt) {

	grunt.initConfig({
		copy: {
			fonts: {
				files: [
					{expand: true, cwd: './bower_components/angularjs/', src: ['*.js', '*.css'], dest: 'www/angularjs/src/vendor/angularjs/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/jquery/dist/', src: ['**'], dest: 'www/angularjs/src/vendor/jquery/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/bootstrap/dist/', src: ['**'], dest: 'www/angularjs/src/vendor/bootstrap/', filter: 'isFile'},

					{expand: true, cwd: './bower_components/webcomponentsjs/', src: ['webcomponents.js'], dest: 'www/webcomponents/src/', filter: 'isFile'}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy']);

};