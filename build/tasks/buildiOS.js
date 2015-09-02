var gulp = require('gulp');
var shell = require('gulp-shell');

// add additional plugins after 'ionic platform add ios' and before 'ionic build ios'
gulp.task('buildiOS', shell.task([
  'gulp index',
  'ionic platform remove ios',
  'ionic platform add ios',
  'cordova plugin add https://github.com/katzer/cordova-plugin-email-composer.git',
  'cordova plugin add https://github.com/phonegap-build/PushPlugin.git',
  'cordova plugin add cordova-plugin-dialogs',
  'cordova plugin add cordova-plugin-media',
  'ionic build ios'
]));