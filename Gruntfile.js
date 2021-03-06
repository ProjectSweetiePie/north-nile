module.exports = function(grunt) {
   // Project configuration.
   grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       watch: {
         scripts: {
           files: ['client/*.js'],
           tasks: ['uglify'],
           options: {
             spawn: false
           }
         }
       },
       uglify: {
          my_target:{
            files:[{
              expand: true,
              cwd: 'client',
              src: '*.js',
              dest: 'server/public/assets/scripts'
            }]
          }
       },
       copy: {
           main: {
               expand: true,
               cwd: "node_modules/",
               src: [
                   "angular/angular.min.js",
                   "angular/angular.min.js.map",
                   "angular/angular-csp.css",
                   "angular-route/angular-route.min.js",
                   "angular-route/angular-route.min.js.map",
                   "bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
                   "bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
                   "bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
                   "leaflet/dist/leaflet.js",
                   "leaflet/dist/leaflet.css",
                   "leaflet-active-area/src/leaflet.activearea.js",
                   "angular-material-data-table/dist/md-data-table.min.js",
                   "angular-material-data-table/dist/md-data-table.css",
                   "ng-file-upload/dist/ng-file-upload-shim.min.js",
                   "ng-file-upload/dist/ng-file-upload.min.js",
                   "angular-audio/app/angular.audio.js"

               ],
               "dest": "server/public/vendor/"
           }
       }
   });

   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');

   // Default task(s).
   grunt.registerTask('default', ['copy', 'uglify']);
   grunt.registerTask('start-watch', ['uglify', 'watch']);
};
