/* global require process*/

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function(){
  return gulp.src('src/css/style.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})

// Gulp watch syntax

// gulp.watch('src/css/**/*.scss', ['sass']);

gulp.task('watch', ['browserSync','sass'], function(){
  gulp.watch('src/css/style.scss', ['sass']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/*.js', browserSync.reload);
  // Other watchers
})
