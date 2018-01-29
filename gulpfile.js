var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  // place code for your default task here

});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})


gulp.task('sass', function() {
  return gulp.src('*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('src'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('*.scss', ['sass']);
  gulp.watch('*.scss', browserSync.reload); 
  gulp.watch('*.html', browserSync.reload); 
    // Other watchers
});