module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      // Compiles Less files to CSS
      development: {
        options: {
          // Specifies the directory where Less files are located
          paths: ["src/styles"],
        },
        files: {
          // Compiles main.less to main.css
          "dev/styles/main.css": "src/styles/main.less",
        },
      },
      production: {
        options: {
          // Compresses CSS files
          compress: true,
        },
        files: {
          // Compiles main.less to main.min.css
          "dist/styles/main.min.css": "src/styles/main.less",
        },
      },
    },
    watch: {
      less: {
        // Watches for changes to Less files
        files: ["src/styles/**/*.less"],
        tasks: ["less:development"],
      },
      html: {
        // Watches for changes to HTML files
        files: ["src/index.html"],
        tasks: ["replace:dev"],
      },
    },
    replace: {
      dev: {
        options: {
          patterns: [
            {
              // Replaces "ENDERECO_DO_CSS" with "./styles/main.css"
              match: "ENDERECO_DO_CSS",
              replacement: "./styles/main.css",
            },
            {
              // Replaces "ENDERECO_DO_JS" with "../src/scripts/main.js"
              match: "ENDERECO_DO_JS",
              replacement: "../src/scripts/main.js",
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            // Replaces index.html in src with index.html in dev
            src: ["src/index.html"],
            dest: "dev/",
          },
        ],
      },
      dist: {
        options: {
          patterns: [
            {
              match: "ENDERECO_DO_CSS",
              // Replaces "ENDERECO_DO_CSS" with "./styles/main.min.css"
              replacement: "./styles/main.min.css",
            },
            {
              match: "ENDERECO_DO_JS",
              // Replaces "ENDERECO_DO_JS" with "./scripts/main.min.js"
              replacement: "./scripts/main.min.js",
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            // Replaces index.html in prebuild with index.html in dist
            src: ["prebuild/index.html"],
            dest: "dist/",
          },
        ],
      },
    },
    htmlmin: {
      dist: {
        options: {
          // Removes HTML comments and whitespace
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          // Minifies index.html
          "prebuild/index.html": "src/index.html",
        },
      },
    },
    clean: ["prebuild"],
    obfuscator: {
      target: {
        files: {
          // Obfuscates main.js
          "dist/scripts/main.min.js": "src/scripts/main.js",
        },
      },
    },
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: "src/images",
            // Matches all PNG, JPEG, and GIF files
            src: ["**/*.{png,jpg,gif}"],
            dest: "dist/images/",
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-replace");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-obfuscator");
  grunt.loadNpmTasks("grunt-contrib-imagemin");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", [
    "less:production",
    "htmlmin:dist",
    "replace:dist",
    "clean",
    "obfuscator",
    "imagemin",
  ]);
};
