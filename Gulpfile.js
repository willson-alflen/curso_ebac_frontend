const gulp = require("gulp");
const sass = require("gulp-sass");

function compilaSass() {
    return gulp.src("./src/styles/*.scss")
    .pipe(sass({
        outputStyle: "compressed"
    }))
    .pipe(gulp.dest("./build/styles"))
}

exports.default = function() {
    gulp.watch("./src/**/*", { ignoreInitial: false }, gulp.series(compilaSass));
}