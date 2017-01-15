var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html'); // Minify HTML  
var concat = require('gulp-concat'); // Join all JS files together to save space  
var stripDebug = require('gulp-strip-debug'); // Remove debugging stuffs  
var uglify = require('gulp-uglify'); // Minify JavaScript  
var imagemin = require('gulp-imagemin'); // Minify images  
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var ngAnnotate = require('gulp-ng-annotate');
// gulp.task('default', function () {
// 	console.log('Running gulp')
// })


// gulp.task('styles', function() {  

// 	console.log('Running styles')
//   gulp.src('./browser/asset/mystyles.css')
//     // .pipe(sass().on('error', sass.logError))
//     // .pipe(gulp.dest('./app/css'))
//     .pipe(minifyCSS())
//     .pipe(gulp.dest('./builds/production/asset/'));
// });

// gulp.task('lintJS', function() {

//     return gulp.src(['./browser/js/**/*.js', './server/**/*.js'])
//         .pipe(plumber({
//             errorHandler: notify.onError('Linting FAILED! Check your gulp process.')
//         }))
//         .pipe(eslint())
//         .pipe(eslint.format())
//         .pipe(eslint.failOnError());

// });

gulp.task('buildJS', function() {
    return gulp.src(['./browser/js/app.js', './browser/js/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        // .pipe(babel({
        //     presets: ['es2015']
        // }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./builds/production/js'));
});

gulp.task('buildJSProduction', function() {
    return gulp.src(['./browser/js/app.js', './browser/js/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./builds/production/js'));
});

gulp.task('buildCSSProduction', function() {
    return gulp.src('./browser/asset/mystyle.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./builds/production/asset'))
});

gulp.task('copyAssets', function() {
   gulp.src('./browser/asset/fonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('./fonts'));
});
