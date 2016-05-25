var gulp = require('gulp');
var tsc  = require('gulp-typescript-compiler');

gulp.task('default', function () {
  return gulp
    .src('src/scripts/**/*.ts')
    .pipe(tsc({
        module: '',
        target: 'ES5',
        sourcemap: true,
        logErrors: true
    }))
    .pipe(gulp.dest('wwwroot'));
});
