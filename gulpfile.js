const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// Compile Sass into css
function style(){
    // 1. Where is my scss file
    return gulp.src('./scss/**/*.scss')
    // 2. Pass that file through sass compiler
    .pipe(sass())
    // 3. Where do I save the compiled CSS?
    .pipe(gulp.dest('./css'))
    // 4. Stream changes to all browsers
    .pipe(browserSync.stream());
}


exports.style = style;