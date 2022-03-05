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
                files: ['src/**/*.pug', 'src/**/*.less'],
                tasks: ['pug', 'less'],
                options: {
                    spawn: false,
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
                cwd: 'src/image',
                src: '**',
                dest: 'dest/image',
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['pug', 'less', 'concat', 'watch']);

};