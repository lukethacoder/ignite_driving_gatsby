var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here

  return gulp.src('src/hidden-file.html.html')
    .pipe(gulp.dest('public/'));
});