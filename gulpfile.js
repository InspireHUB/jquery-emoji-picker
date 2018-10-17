var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    babel = require("gulp-babel");

gulp.task('default', function() {
    return gulp.src(['./js/jquery.emojipicker.js', './js/jquery.emojis.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('jquery.emojipicker.bundle.js'))
        .pipe(babel({
            presets: ['env'],
            comments: false,
            compact: true
        }))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./js'));
});