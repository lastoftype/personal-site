/* jshint node:true */
module.exports = function(grunt) {
    'use strict';

    // Add time stats 
    require('time-grunt')(grunt);

    // automates grunt task adding
    require('jit-grunt')(grunt);

    // expand on utitilies
    var _ = grunt.util._,
        path = require('path'),
        dateVar = grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT");

    var config = _.extend({},
        require('load-grunt-config')(grunt, {
            configPath: path.join(__dirname, 'grunt'),
            loadGruntTasks: false,
            init: false,
            data: {
              // Unused, but useful for git commits
              dateVar: dateVar,
            }
        })
    );

    grunt.initConfig(config);

    // Register tasks
    grunt.registerTask('build', [
        'sass',
        'autoprefixer',
        'cssmin',
        'concat',
        'uglify',
        'copy'
    ]);

    // Register tasks
    grunt.registerTask('default', [
        'sass:main'
    ]);


};
