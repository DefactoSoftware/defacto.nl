module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    cssmin: {
	  compress: {
	    files: {
	      "dist/stylesheet/Defacto-all.css": ["styles/*.css"]
	    }
	  }
	}
  });

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['cssmin']);

};
