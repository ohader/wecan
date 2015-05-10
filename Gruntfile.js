module.exports = function(grunt) {

	grunt.initConfig({
		copy: {
			fonts: {
				files: [
					{expand: true, cwd: './bower_components/angularjs/', src: ['*.js', '*.css'], dest: 'www/angularjs/src/vendor/angularjs/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/jquery/dist/', src: ['**'], dest: 'www/angularjs/src/vendor/jquery/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/bootstrap/dist/', src: ['**'], dest: 'www/angularjs/src/vendor/bootstrap/', filter: 'isFile'},

					{expand: true, cwd: './bower_components/webcomponentsjs/', src: ['*.js'], dest: 'www/webcomponents/src/vendor/webcomponents/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/polymer/', src: ['*', 'src/**'], dest: 'www/webcomponents/src/vendor/polymer/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/jquery/dist/', src: ['**'], dest: 'www/webcomponents/src/vendor/jquery/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/bootstrap/dist/', src: ['**'], dest: 'www/webcomponents/src/vendor/bootstrap/', filter: 'isFile'},
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy']);

};