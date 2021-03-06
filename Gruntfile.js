module.exports = function(grunt) {


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/** 
		* Sass Task
		**/

		sass: {
			dev: {
				options: {
					style: 'expanded',
					sourcemap: 'none',
				},
				files: {
					'compiled/style.css': 'sass/style.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none',
				},
				files: {
					'compiled/style-min.css': 'sass/style.scss'
				}
			}
		},
		/** 
		* Watch Task
		**/
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ["watch"]);

}