var gulp = require('gulp');
var sass = require('gulp-sass');
//var ts = require('gulp-typescript');

//var typescript = require('gulp-tsc');

// gulp.task('compile', function(){
//   gulp.src(['script/**/*.ts'])
//     .pipe(typescript())
//     .pipe(gulp.dest('js/'))
// });


gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./wwwroot/css/'))
});

//gulp.task('scripts', function () {
//    return gulp.src('script/**/*.ts')
//        .pipe(ts({
//            noImplicitAny: true,
//            out: 'output.js'
//        })
//        .pipe(gulp.dest('js')));
//});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
    //gulp.watch('script/**/*.ts',['compile']);
});
