module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    outputStyle: 'compressed'
                }
            }
        },
        autoprefixer:  {
            options: {
                browsers: ['last 3 version']
            },
            no_dest: {
                src: 'css/*.css'
           }
        },
        jshint: {
            options: {
                trailing: true
            },
            files: ['js/Gruntfile.js', 'js/sectionSlide.js']
        },
        uglify: {
            options: {
                beautify: true
            },
            target: {
                files: {
                    'js/sectionSlide.min.js': [
                    //    'js/jquery-1.11.0.min.js',
                    //    'js/jquery-migrate-1.2.1.min.js',
                        'js/touchswipe.js',
                        'js/browserSwipe.js',
                        'js/sectionSlide.js'
                    ]
                }
            }
        },
        haml:{
            dist: {
                files: {
                    "test.html": "test.haml"
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8081,
                    base: '.',
                    hostname: '*'
                }
            }
        },
        watch: {
            js: {
                files: 'js/sectionSlide.js',
                tasks: ['jshint', 'uglify']
            },
            sass: {
                files: 'sass/*.scss',
                tasks: ['compass']
            },
            css: {
                files: 'css/*.css',
                tasks: ['autoprefixer']
            },
            haml: {
                files: '*.haml',
                tasks: ['haml']
            }
        }
    });
    grunt.registerTask('default', ['jshint', 'uglify', 'compass', 'autoprefixer', 'haml']);
    grunt.registerTask('dev', ['connect', 'watch']);
};
