/* jshint node:true */
module.exports = function(grunt) {
    'use strict';

    require('time-grunt')(grunt);

    grunt.initConfig({
        // setting folder templates
        dirs: {
            css: 'dist/css',
            sass: 'app/assets/scss',
            js: 'app/dist/js'
        },
        sass: {
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= dirs.sass %>/',
                    src: [
                        '*.scss',
                        '!mixins.scss',
                        '!vendors.scss'
                    ],
                    dest: '<%= dirs.css %>/',
                    ext: '.css'
                }]
            },
            vendors: {
                files: [{
                    expand: true,
                    cwd: '<%= dirs.sass %>/',
                    src: [
                        'vendors.scss',
                    ],
                    dest: '<%= dirs.css %>/',
                    ext: '.css'
                }]
            }
        },
        // Minify all .css files.
        cssmin: {
            minify: {
                expand: true,
                cwd: '<%= dirs.css %>/',
                src: ['*.css'],
                dest: '<%= dirs.css %>/',
                ext: '.css'
            }
        },
        // Watch changes for assets
        watch: {
            sass: {
                files: [
                    '<%= dirs.sass %>/*.scss',
                ],
                tasks: ['sass:main'],
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            main: {
                src: 'dist/css/main.css',
                dest: 'dist/css/main.css'
            },
            vendor: {
                src: 'dist/css/vendors.css',
                dest: 'dist/css/vendors.css'
            },
        },
        concat: {
            extras: {
                src: [
                    'app/bower_components/FitText.js/jquery.fittext.js',
                    'app/assets/js/main.js'
                ],
                dest: 'dist/js/main.js',
            }
        },
        // Minify .js files.
        uglify: {
            options: {
                preserveComments: 'some'
            },
            jsfiles: {
                files: [{
                    expand: true,
                    cwd: 'dist/js/',
                    src: [
                        'main.js'
                    ],
                    dest: 'dist/js/',
                    ext: '.min.js'
                }]
            }
        }
    });

    // Load NPM tasks to be used here
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Register tasks
    grunt.registerTask('build', [
        'sass',
        'autoprefixer',
        'cssmin',
        'concat',
        'uglify'
    ]);

    // Register tasks
    grunt.registerTask('default', [
        'sass:main'
    ]);


};
