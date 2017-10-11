const gulp = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean');

gulp.task('sass', ['clean'], () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(clean())
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('clean', () => {
  return gulp.src('./dist', {read: false})
    .pipe(clean());
});
