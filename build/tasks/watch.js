var gulp = require('gulp');
var paths = require('../paths')();

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});