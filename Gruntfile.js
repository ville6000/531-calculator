module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        concat:      {
            dist_css: {
                src:  [
                    'node_modules/bootstrap/dist/css/bootstrap.min.css',
                    'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                    'src/assets/css/main.css'
                ],
                dest: 'dist/assets/css/styles.min.css'
            },
            dist_js:  {
                src:  ['node_modules/angular/angular.min.js', 'src/assets/js/app.js'],
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