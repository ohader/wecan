module.exports = function(grunt) {

	grunt.initConfig({
		copy: {
			files: {
				files: [
					{expand: true, cwd: './bower_components/angularjs/', src: ['*.js', '*.css'], dest: 'www/angularjs/src/vendor/angularjs/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/jquery/dist/', src: ['**'], dest: 'www/angularjs/src/vendor/jquery/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/bootstrap/dist/', src: ['**'], dest: 'www/angularjs/src/vendor/bootstrap/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/angular-google-maps/dist/', src: ['**'], dest: 'www/angularjs/src/vendor/angular-google-maps/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/lodash/dist/', src: ['**'], dest: 'www/angularjs/src/vendor/lodash/', filter: 'isFile'},

					{expand: true, cwd: './bower_components/webcomponentsjs/', src: ['*.js'], dest: 'www/webcomponents/src/vendor/webcomponents/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/polymer/', src: ['*', 'src/**'], dest: 'www/webcomponents/src/vendor/polymer/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/jquery/dist/', src: ['**'], dest: 'www/webcomponents/src/vendor/jquery/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/bootstrap/dist/', src: ['**'], dest: 'www/webcomponents/src/vendor/bootstrap/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/google-apis/', src: ['**'], dest: 'www/webcomponents/src/vendor/google-apis/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/google-map/', src: ['**'], dest: 'www/webcomponents/src/vendor/google-map/', filter: 'isFile'},
					{expand: true, cwd: './bower_components/iron-jsonp-library/', src: ['**'], dest: 'www/webcomponents/src/vendor/iron-jsonp-library/', filter: 'isFile'},
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy']);

};