var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    uglify = require("gulp-uglify-es").default;

gulp.task('default', function() {
    return gulp.src(['./js/jquery.emojipicker.js', './js/jquery.emojis.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('jquery.emojipicker.bundle.js'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./js'));
});