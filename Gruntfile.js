module.exports = function(grunt){
	grunt.initConfig({
		clean: {
			build:{
				src: 'www/'
			}
		},

		copy: {
			html:{
				expand: true,
				cwd: 'src',
				src: '*.html',
				dest: 'build/'
			}
		},


		jasmine: {
		    pivotal: {
		      	src: 'src/js/**/*.js',
		      	options: {
		        	specs: 'tests/spec/*.js',
		        	helpers: 'tests/helpers/*.js'
		      	}
		    }
		},

		concat: {
		    dist: {
	          	src: 'src/js/**/*.js',
	          	dest: 'build/js/app.js'
		    }
		},

		uglify: {
			build: {
		      	files: {
		      		'build/js/app.min.js': ['build/js/app.js']
		      	}
		    }
		},

		usemin: {
		  html: 'build/index.html'
		},

		watch: {
			test: {
			    files: 'tests/**/*.js',
			    tasks: ['jasmine'],
			    options: {
			      	event: ['added', 'deleted', 'changed'],
			    }
			},

			scripts: {
				files: 'src/js/**/*.js',
				tasks: ['concat', 'uglify', 'copy'],
				options: {
				  	event: ['added', 'deleted', 'changed'],
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-usemin');

	grunt.registerTask('default', ['clean', 'copy',  'jasmine', 'usemin', 'concat', 'uglify', 'watch']);
}