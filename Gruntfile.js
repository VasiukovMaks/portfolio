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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['pug', 'less', 'watch']);

};