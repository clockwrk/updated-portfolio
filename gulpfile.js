let gulp = require('gulp');
let minifyCSS = require('gulp-minify-css');
let minifyHTML = require('gulp-minify-html'); // Minify HTML  
let concat = require('gulp-concat'); // Join all JS files together to save space  
let stripDebug = require('gulp-strip-debug'); // Remove debugging stuffs  
let uglify = require('gulp-uglify'); // Minify JavaScript  
let imagemin = require('gulp-imagemin'); // Minify images  
let plumber = require('gulp-plumber');
let sourcemaps = require('gulp-sourcemaps');
let babel = require('gulp-babel');
let ngAnnotate = require('gulp-ng-annotate');
let livereload = require('gulp-livereload');
let eslint = require('gulp-eslint');
let notify = require('gulp-notify');



// gulp.task('default', function () {
//  console.log('Running gulp')
// })


// gulp.task('styles', function() {  

//  console.log('Running styles')
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

gulp.task('reload', function() {
    livereload.reload();
})

gulp.task('reloadCSS', function() {
    return gulp.src('./public/styles.css').pipe(livereload())
})

gulp.task('lintJS', function() {
    return gulp.src(['./browser/js/**/*.js', './server/**/*.js'])
        .pipe(plumber({
            errorHandler: notify.onError('Linting FAILED! Check your gulp process.')
        }))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
})


gulp.task('buildJS', function() {
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
        .pipe(gulp.dest('./public'));
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
        .pipe(gulp.dest('./public'));
});

gulp.task('buildCSSProduction', function() {
    return gulp.src('./browser/asset/mystyle.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./builds/production/asset'))
});
