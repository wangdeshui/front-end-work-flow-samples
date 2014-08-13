module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            options: { force: true },
            all: {
                src:'../samples/app/scripts/all.js'
            }
        },

        bower: {
          install: {
              
          }  
        },

        concat: {
            options: {
                seperator: ";"
            },
            dist: {
                src: ['../samples/app/scripts/app.js','../samples/app/scripts/controllers/*.js'],
                dest: '../samples/app/scripts/all.js'
            }
        },

        uglify:
        {
        	build:{
        		src:'../samples/app/scripts/all.js',
        		dest: '../samples/app/scripts/all.min.js'
        	}
        },

        bowerInstall: {
            target: {
                src:'../samples/app/index.html'
            }
        }

    });

    grunt.registerTask('default', ['clean','bower','bowerInstall','concat','uglify']);

    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-bower-task');
};