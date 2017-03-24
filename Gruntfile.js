module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // },
    serve: {
        path: '<%= pkg.basePath %>'
    },
    browserify: {
      'public/app.js': ['src/app.js']
    },
    watch: {
      files: [ "src/**/*.js"],
      tasks: [ 'browserify' ],
      options: {
        livereload: true,
      },
    },
    concurrent: {
      vaiamicomio: ['watch', 'serve', 'open:dev'],
			options: {
				logConcurrentOutput: true
			}
    },
    open : {
      dev : {
        path: 'http://localhost:9000/index.html'
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-open');
  

  // Default task(s).
  grunt.registerTask('default', ['browserify', 'concurrent:vaiamicomio']);

};