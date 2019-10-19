//引用
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


//搬家
gulp.task('concat', function () {
    gulp.src('dev/*.html').pipe(gulp.dest('dest/'));
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


gulp.task('default', function () {
    browserSync.init({
        server: {
            //根目錄
            baseDir: "./dest",
            index: "index.html"
        }
    });

    gulp.watch(["dev/sass/*.scss", "dev/sass/**/*.scss"], ['sass']).on('change', reload);
    gulp.watch(["dev/*.html" , "dev/**/*.html"] , ['concat']).on('change', reload);
});




