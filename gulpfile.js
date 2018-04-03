var gulp = require('gulp');

gulp.task('copyConfig', function() {
  gulp.src('./config/paths.js')
  .pipe(gulp.dest('./node_modules/react-scripts/config'));
});