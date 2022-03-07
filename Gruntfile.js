module.exports = function(grunt) {

    grunt.initConfig({
        pug: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    'dest/index.html': ['src/*.pug']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.pug', 'src/**/*.less', "src/**/*.js"],
                tasks: ['concat', 'less', 'pug'],
                options: {
                    livereload: true
                },
            },
        },
        less: {
            development: {
                files: {
                    'dest/style.css': 'src/less/index.less'
                }
            },
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'dest/index.js',
            },
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src/',
                src: ['image/**', 'fonts/**'],
                dest: 'dest/',
            },
        },
        connect: {
            server: {
                options: {
                    protocol: "http",
                    hostname: "localhost",
                    port: 9009,
                    base: 'dest/',
                    open: true,
                    livereload: true
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['copy', 'pug', 'less', 'concat', 'connect:server', 'watch']);
    grunt.registerTask('dev', ['copy', 'pug', 'less', 'concat', 'connect:server', 'watch']);
};