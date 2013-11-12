module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    cssmin: {
  	  compress: {
  	    files: {
  	      "dist/stylesheet/Defacto-all.css": [
            "styles/*.css",
            "bower_components/fancybox/source/jquery.fancybox.css"
          ]
  	    }
  	  }
  	},
    uglify: {
        dist: {
            files: {
              'dist/uploads/defacto/js/plugins.js': [
                'bower_components/fancybox/source/jquery.fancybox.pack.js',
                'bower_components/jquery-cycle/jquery.cycle.lite.js'
              ],
              'dist/uploads/defacto/js/scripts.js': [
                'scripts/*.js'
              ]
                
            }
        }
    }
  });

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [
    'cssmin',
    'uglify'
    ]);

};
