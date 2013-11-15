module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
            dist: 'dist'
    },
    replace: {
      fancybox: {
        src: ['bower_components/fancybox/source/jquery.fancybox.css'],             // source files array (supports minimatch)
        dest: 'bower_components/fancybox/source/jquery.fancybox.defacto.css',             // destination directory or file
        replacements: [{ 
          from: 'url(\'',                   // string replacement
          to: 'url(\'../uploads/images/fancybox/' 
        }]
      }
    },
    cssmin: {
  	  compress: {
  	    files: {
  	      "dist/stylesheet/Defacto-all.css": [
            "styles/*.css",
            "bower_components/fancybox/source/jquery.fancybox.defacto.css"
          ]
  	    }
  	  }
  	},
    uglify: {
        dist: {
            files: {
              
              'dist/uploads/defacto/js/scripts.js': [
                /*plugins*/
                'bower_components/fancybox/source/jquery.fancybox.pack.js',
                'bower_components/jquery.tools/src/scrollable/scrollable.js',
                'bower_components/jquery.tools/src/scrollable/scrollable.navigator.js',
                'bower_components/jquery.tools/src/scrollable/scrollable.autoscroll.js',
                'bower_components/jquery-cycle/jquery.cycle.lite.js',
                
                /*own scripts*/
                'scripts/global/*.js'
              ],

              'dist/uploads/defacto/js/validate.js': [
                'bower_components/jquery.validation/jquery.validate.js',
                'scripts/jquery.validate.pack.realmail.js'
              ]

            },
            options: {
              preserveComments: 'some'
          }
        }
    },
    copy: {
      main: {
        files: [
          //fancybox
          {
            expand: true,
            cwd: 'bower_components/fancybox/source/',
            src: ['*.{gif,png}'],
            dest: 'dist/uploads/images/fancybox/'
          },

          //templates
          {
            expand: true,
            cwd: 'templates/menu/',
            src: ['*.tpl'],
            dest: 'dist/modules/MenuManager/templates/'}
        ]
      }
    }
  });

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', [
    'clean',
    'replace',
    'cssmin',
    'uglify',
    'copy'
    ]);

};