module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    project:
      app: 'app'
      assets: '<%= project.app %>/assets'
      src: 'src'
      css: [
        '<%= project.src %>/sass/*'
      ]
      js: [
        '<%= project.src %>'
      ]
      workers: [
        '<%= project.src %>/workers/*'
      ]

    watch:
      coffeescripts:
        files: [
          '<%= project.js %>/controllers/*',
          '<%= project.js %>/lib/*',
          '<%= project.js %>/models/*'
        ]
        tasks: ['coffee:dev']
        options:
          spawn: false

      js:
        files: '<%= project.assets %>/js/test.js'
        tasks: ['jshint']

    jshint:
      all: ['<%= project.assets %>/js/test.js']

    coffee:
      # dev:
      #   options:
      #     sourceMap: true
      #   files:
      #     '<%= project.assets %>/js/app.js': '<%= project.js %>'
      dev:
        options:
          sourceMap: true
          bare: true
        expand: true
        cwd: 'src'
        src: ['models/*', 'controllers/*', 'lib/*']
        dest: 'app'
        ext: '.js'
        rename: (dest, src) ->
          console.log dest, src
          dest + '/' + src.replace(/\.coffee$/, '.js')
      dist:
        files:
          '<%= project.assets %>/js/app.js': '<%= project.js %>'

  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-jasmine')
