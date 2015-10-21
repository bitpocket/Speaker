var gulp = require('gulp');
var sass = require('gulp-sass');
// var typescript = require('gulp-tsc');

// gulp.task('compile', function(){
//   gulp.src(['src/app/**/*.ts'])
//     .pipe(typescript({
//         "target": "ES5",
//         "module": "commonjs",
//         "sourceMap": true,
//         "emitDecoratorMetadata": true,
//         "experimentalDecorators": true,
//         "removeComments": false,
//         "noImplicitAny": false
//         }
//     ))
//     .pipe(gulp.dest('src/app/'))
// });

gulp.task('styles', function() {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('src/scss/**/*.scss',['styles']);
    // gulp.watch('src/app/**/*.ts',['compile']);
});
