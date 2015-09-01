var gulp = require('gulp');
var shell = require('gulp-shell');

// add additional plugins after 'ionic platform add ios' and before 'ionic build ios'
gulp.task('buildiOS', shell.task([
  'ionic platform remove ios',
  'ionic platform add ios',
  'cordova plugin add https://github.com/katzer/cordova-plugin-email-composer.git',
  'ionic build ios'
]));