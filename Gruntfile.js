module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css:{
				files: ['dev/*.css'],
				tasks: ['autoprefixer','cssmin']
			}
		},
		cssmin: {
			dist: {
				expand: true,
				src: ['dist/reset.css'],
				ext: '.min.css'
			}
		},
		autoprefixer: {
			single_file: {
		      options: {
		    	  browsers: ['last 2 versions', 'ie 7', 'ie 8', 'ie 9']
		      },
		      src: 'dev/reset.css',
		      dest: 'dist/reset.css'
		    }
		}
	});
  
	/*
	 * 작업에 필요한 모듈 로드하기 grunt.loadNpmTasks('grunt-ANY-PLUGIN');
	 */ 
	for (var key in grunt.file.readJSON("package.json").devDependencies) {
		if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
	}
	
	grunt.registerTask('default', ['watch']);
	
};