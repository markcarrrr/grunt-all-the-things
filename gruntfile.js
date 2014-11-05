module.exports = function (grunt) {

	grunt.initConfig({
		path: {
			assets: 'site/external/',
			images: 'images/'
		},

		pkg: grunt.file.readJSON("package.json"),

		watch: {
			sass: {
				files: "**/*.scss",
				tasks: ["sass"]
			},

			css: {
				files: "**/*.css",
				tasks: ["cssmin"]
			},

			scripts: {
				files: ["**/*.js"],
				tasks: ["uglify"]
			}
		},

		sass: {
			dest: {
				options: {
					style: "compressed"
				},
				files: {
					"_SASS/_EXPORT/min.css" : "_SASS/imports.scss"
				}
			}
		},

		cssmin: {
			combine: {
				files: {
					"<%= path.assets %>min.css": [
						"_SASS/_EXPORT/min.css"
					]
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
				}
			}
		},

		imagemin: {
			all: {
				files: [{
					expand: true,
					cwd: "_SPRITES/",
					src: ["<%= path.assets %><%= path.images %>*.[png,svg]"],
					dest: "_SPRITES/"
				}]
			},
			sprites: {
				files: [{
					expand: true,
					cwd: "_SPRITES/",
					src: ["**/*.svg"],
					dest: "_SPRITES/"
				}]
			}
		},

		"dr-svg-sprites": {
			options: {
				cssPngPrefix: ".no-svg",
				cssSvgPrefix: ""
			},
			icons: {
				options: {
					spriteElementPath: "_SPRITES/icon-sprite",
					spritePath: "<%= path.assets %><%= path.images %>icon-sprite.svg",
					prefix: "icon-",
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
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-modernizr");
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-dr-svg-sprites');

	// Tasks
	grunt.registerTask("default", ["watch"]);
	grunt.registerTask("sprite", ["newer:imagemin:sprites", "dr-svg-sprites", "newer:imagemin:all"]);
};