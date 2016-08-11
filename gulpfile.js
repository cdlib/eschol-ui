// ##### Gulp Toolkit for the eScholarship UI Library #####

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var minifyCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var del = require('del');
var modernizr = require('gulp-modernizr');
var runSequence = require('run-sequence');
var validateHTML = require('gulp-w3cjs');
var scsslint = require('gulp-scss-lint');
var eslint = require('gulp-eslint');
var lbInclude = require('gulp-lb-include');
var ssi = require('browsersync-ssi');
var postcss = require('gulp-postcss');
var assets = require('postcss-assets');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var eslintify = require('eslintify');

gulp.task('browserify', function() {
  var watcher  = watchify(browserify({
      entries: ['app/jsx/app.jsx'],
      transform: [reactify],
      debug: true,
      cache: {}, packageCache: {}, fullPaths: true
    }));
  return watcher.on('update', function () {
      watcher.bundle()
        .pipe(source('app/js/bundle.js'))
        .pipe(gulp.dest('.'))
        console.log('Bundle.js updated');
    })
      .bundle()
      .pipe(source('app/js/bundle.js'))
      .pipe(gulp.dest('.'));
});

// Run the dev process 'gulp':
gulp.task('default', function (callback) {
  runSequence(['browserify', 'browserSync', 'sass', 'watch'],
    callback
  )
})

// ***** Build process not working yet ***** //
// gulp.task('build', function (callback) {
//   runSequence('clean', 
//     ['scss-lint', 'sass', 'useref', 'copy-images'],
//     callback
//   )
// })


// Minify all images during development:
gulp.task('minify-images', function(){
  return gulp.src('app/images/**')
  .pipe(imagemin())
  .pipe(gulp.dest('app/images'))
});


// Run 'gulp modernizr' to build a custom modernizr file based off of classes found in CSS:
gulp.task('modernizr', function() {
  gulp.src('app/css/main.css') // where modernizr will look for classes
    .pipe(modernizr({
      options: ['setClasses'],
      dest: 'app/js/modernizr-custombuild.js'
    }))
});


// Process Sass to CSS, add sourcemaps, autoprefix CSS selectors, optionally Base64 font and image files into CSS, and reload browser:
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(postcss([assets({
      loadPaths: ['fonts/', 'images/']
    })]))
    .pipe(sourcemaps.write('sourcemaps'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
})


// Watch sass, html, and js and reload browser if any changes:
gulp.task('watch', ['browserSync', 'sass', 'scss-lint'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/scss/**/*.scss', ['scss-lint']);
  // gulp.watch('app/js/**/*.js', ['js-lint']);
  gulp.watch('app/**/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
  gulp.watch('app/js/bundle.js', browserSync.reload);
});


gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app',
      middleware: ssi({
        baseDir: __dirname + '/app',
        ext: '.html',
        version: '1.4.0'
      })
    },
  })
})


// Concatenate and minify CSS and JavaScript from paths within useref tags during build process; include files:
gulp.task('useref', function(){
  return gulp.src(['app/**/*.html', '!app/includes/*'])
    .pipe(useref())
    .pipe(gulpIf('*.css', minifyCSS()))
    // .pipe(gulpIf('*.js', uglify()))
    .pipe(lbInclude()) // Process <!--#include file="" --> statements
    .pipe(gulp.dest('dist'))
});


// Delete 'dist' directory at start of build process:
gulp.task('clean', function() {
  return del('dist');
})


// Copy images to dist directory during the build process:
gulp.task('copy-images', function(){
  return gulp.src('app/images/**')
  .pipe(gulp.dest('dist/images'))
});


// Lint Sass:
gulp.task('scss-lint', function() {
  return gulp.src(['app/scss/**/*.scss', '!app/scss/vendor/**/*.scss'])
    .pipe(scsslint({
      'config': 'scss-lint-config.yml' // Settings for linters. See: https://github.com/brigade/scss-lint/tree/master/lib/scss_lint/linter
    }));
});


gulp.task('js-lint', function() { 
  return gulp.src(['app/jsx/*'])
    .pipe(eslint())
    .pipe(eslint.format());
});
