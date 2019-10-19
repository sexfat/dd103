//引用
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');


//搬家
gulp.task('concat', function () {
    gulp.src('dev/js/*.js').pipe(gulp.dest('dest/js'));
})

//minicss
gulp.task('minicss', function () {
    return gulp.src('dev/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dest/css/'));
})

//sass
gulp.task('sass', function () {
    return gulp.src('./dev/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dest/css'));
  });

  //監看
  gulp.task('watch', function () {
    gulp.watch('dev/sass/*.scss', ['sass']);
});




