module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        concat:      {
            dist_css: {
                src:  [
                    'src/assets/bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'src/assets/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                    'src/assets/css/main.css'
                ],
                dest: 'dist/assets/css/styles.min.css'
            },
            dist_js:  {
                src:  ['src/assets/bower_components/angular/angular.min.js', 'src/assets/js/app.js'],
                dest: 'dist/assets/js/app.min.js'
            }
        },
        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['src/index.html']
                }
            }
        }
    });

    grunt.registerTask("default", ["processhtml", "concat"]);
};