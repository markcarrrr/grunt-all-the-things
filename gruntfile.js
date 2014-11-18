module.exports = function (grunt) {

	grunt.initConfig({
		path: {
			assets: 'site/external/',
			images: 'images/'
		},

		pkg: grunt.file.readJSON("package.json"),

		watch: {
			sass: {
				files: "_SASS/**/*.scss",
				tasks: ["sass"]
			},

			scripts: {
				files: ["_JAVASCRIPT/*.js"],
				tasks: ["uglify"]
			}
		},

		sass: {
			dest: {
				options: {
					sourceMap: true,
					style: "compressed"
				},
				files: {
					"<%= path.assets %>min.css" : "_SASS/imports.scss"
				}
			}
		},

		uglify: {
			options: {
				mangle: false
			},

			my_target: {
				options: {
					beautify: false // use true for debugging
				},

				files: {
					"<%= path.assets %>min.js" : [
						"_JAVASCRIPT/test-modernizr-css-classes.js"
					]
				}
			}
		},

		modernizr: {
			dist: {
				"devFile" : "bower_components/modernizr/modernizr.js",
				"outputFile" : "<%= path.assets %>modernizr.js",
				"files" : {
					"src": [
						"_SASS/*/*.scss",
						"_JAVASCRIPT/*.js"
					]
				},
				"extra" : {
					"load" : false
				}
			}
		},

		imagemin: {
			all: {
				files: [{
					expand: true,
					cwd: "<%= path.assets %><%= path.images %>",
					src: ["**/*.{png,gif}"],
					dest: "<%= path.assets %><%= path.images %>"
				}]
			}
		},

		"dr-svg-sprites": {
			options: {
				cssPngPrefix: ".no-svg",
				cssSvgPrefix: ""
			},
			generated: {
				options: {
					spriteElementPath: "_SPRITES/sprite",
					spritePath: "<%= path.assets %><%= path.images %>sprite.svg",
					prefix: "",
					cssPrefix: "",
					cssSuffix: "scss",
					cssPath: "_SASS/scss/",
					layout: "packed",
					unit: 1
				}
			}
		}
	});

	// Plugins
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-modernizr");
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-dr-svg-sprites');

	// Tasks
	grunt.registerTask("default", ["watch"]);
	grunt.registerTask("build", ["sass", "modernizr", "newer:imagemin:all"]);
	grunt.registerTask("sprite", ["dr-svg-sprites", "newer:imagemin:all"]);
};