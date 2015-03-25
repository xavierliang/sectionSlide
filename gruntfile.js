module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
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
            target: {
                files: {
                    'js/sectionSlide.min.js': [
                        'js/jquery-1.11.0.min.js',
                        'js/jquery-migrate-1.2.1.min.js',
                        'js/touchswipe.js',
                        'js/browserSwipe.js',
                        'js/sectionSlide.js'
                    ]
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
                files: 'js/*.js',
                tasks: ['jshint', 'uglify']
            },
            sass: {
                files: 'sass/*.scss',
                tasks: ['compass']
            },
            css: {
                files: 'css/*.css',
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.registerTask('default', ['jshint', 'uglify', 'compass', 'autoprefixer']);
    grunt.registerTask('dev', ['connect', 'watch']);
};
