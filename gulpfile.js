var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here

  return gulp.src('src/contact.html')
    .pipe(gulp.dest('public/'));
});