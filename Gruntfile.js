module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /* Watch task : SASS  */
        sass: {
            dist: {
                options: { 
                    style: 'expanded'
                },
                files: { 
                    'css/style.css': 'sass/style.scss',
                }
            }
        },
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [ {
                  cwd: "views",
                  src: "**/*.jade",
                  dest: "views",
                  expand: true,
                  ext: ".html"
                } ]
            }
        },
        watch: {
            jade: {
                files: '**/*.jade',
                tasks: ['jade']
            },
            html: {
                files: '**/*.html'
            },
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            },
            options: {
                livereload: true
            }
        },
        uglify: {
            my_target: {
                files: {
                'js/features.min.js': ['js/features.js']
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-livereload');

    // Launch task.
    grunt.registerTask('default', ['watch']);

};