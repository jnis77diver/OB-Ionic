var gulp = require('gulp');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');


gulp.task('buildiOS', function(){
  runSequence('iosPlatform', 'addPlugins', 'iosBuildStep');
});

gulp.task('iosPlatform', shell.task([
  'ionic platform remove ios',
  'ionic platform add ios'
]));


// add additional plugins at the end of this list
gulp.task('addPlugins', shell.task([
  'cordova plugin add https://github.com/katzer/cordova-plugin-email-composer.git',
  'cordova plugin add https://github.com/phonegap-build/PushPlugin.git',
  'cordova plugin add org.apache.cordova.dialogs',
  'cordova plugin add org.apache.cordova.media'
]));

gulp.task('iosBuildStep', shell.task([
  'ionic build ios'
]));

