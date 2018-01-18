// ##### Gulp Toolkit for the eScholarship UI Library #####

var _ = require('lodash');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
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
var postcss = require('gulp-postcss');
var assets = require('postcss-assets');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var streamify = require('gulp-streamify');
var eslintify = require('eslintify');
var babelify = require('babelify');
var historyApiFallback = require('connect-history-api-fallback');
var gutil = require('gulp-util');
var ghPages = require('gulp-gh-pages');
var sassLint = require('gulp-sass-lint');

///////////////////////////////////////////////////////////////////////////////////////////////////
// Transformations to build lib-bundle.js
gulp.task('bundle-libs', function() {
  var b = watchify(browserify({
    entries: ['package.json'],
    debug: false,  // generate source maps
    cache: {}, packageCache: {}, fullPaths: true
  }))

  function bundle() {
    gutil.log("Bundling libs.")
    libsBuilt = false
    del("app/js/lib-bundle.js")
    // This bundle will encompass everything in package.json that's not a "dev" dependency
    getNPMPackageIds().forEach(function (id) { b.require(id) });
    return b.bundle()
      .on('error', gutil.log.bind(gutil, 'Bundling error'))
      .pipe(source('app/js/lib-bundle.js'))
      .pipe(gulp.dest('.'))
      .on('end', function() { gutil.log("Built lib-bundle.js") })
  }

  bundle()
  return b.on('update', bundle).on('log', gutil.log)
});

///////////////////////////////////////////////////////////////////////////////////////////////////
// Transformations to build app-bundle.js
gulp.task('bundle-app', function() {
  // NOTE: transforms must go on this first part, not in the bundle() function. Otherwise they
  // get applied multiple times in a row, and the build takes longer and longer.
  var b = watchify(browserify({
    entries: ['app/jsx/app.jsx'],
    debug: true,  // generate source maps
    cache: {}, packageCache: {}
  }))
  .transform('babelify', {presets: ['es2015', 'react', 'stage-2']})

  function bundle() {
    gutil.log("Bundling app.")
    appBuilt = false
    del("app/js/app-bundle.js")
    // This bundle is for the app, and excludes all package.json dependencies
    getNPMPackageIds().forEach(function (id) { b.external(id) });
    return b
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Bundling error'))
      .pipe(source('app/js/app-bundle.js'))
      .pipe(gulp.dest('.'))
      .on('end', function() { gutil.log("Built app-bundle.js") })
  }

  bundle()
  return b.on('update', bundle).on('log', gutil.log)
});

///////////////////////////////////////////////////////////////////////////////////////////////////
// read package.json and get dependencies' package ids
function getNPMPackageIds() {
  var packageManifest = {};
  try {
    packageManifest = require('./package.json');
  } catch (e) {
    // does not have a package.json manifest
  }
  return _.keys(packageManifest.dependencies) || [];
}


// Run the dev process 'gulp':
gulp.task('default', function (callback) {
  runSequence(['bundle-libs', 'bundle-app', 'browserSync', 'sass', 'watch'],
    callback
  )
})


// Run the build process 'build':
gulp.task('build', function (callback) {
  runSequence('clean', 
    ['scss-lint', 'sass', 'copy-bower', 'copy-fonts', 'copy-images', 'copy-css', 'copy-index', 'copy-js'],
    callback
  )
})


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
    .pipe(postcss([
      assets({
        loadPaths: ['fonts/', 'images/']
      }),
      autoprefixer({
        flexbox: ['no-2009']
      }),
      require('postcss-normalize')({
        forceImport: true
      })
    ]))
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
});


gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app',
    },
  })
})


// Delete 'dist' directory at start of build process:
gulp.task('clean', function() {
  return del('dist');
})


// Copy bower components to dist directory during the build process:
gulp.task('copy-bower', function(){
  return gulp.src('app/bower_components/**')
  .pipe(gulp.dest('dist/bower_components'))
});


// Copy fonts to dist directory during the build process:
gulp.task('copy-fonts', function(){
  return gulp.src('app/fonts/**')
  .pipe(gulp.dest('dist/fonts'))
});


// Copy images to dist directory during the build process:
gulp.task('copy-images', function(){
  return gulp.src('app/images/**')
  .pipe(gulp.dest('dist/images'))
});


// Minify and copy CSS to dist directory during the build process:
gulp.task('copy-css', function(){
  return gulp.src('app/css/main.css')
  .pipe(gulpIf('*.css', minifyCSS()))
  .pipe(gulp.dest('dist/css'))
});


// Copy index.html to dist directory during the build process:
gulp.task('copy-index', function(){
  return gulp.src('app/index.html')
  .pipe(gulp.dest('dist/'))
});


// Minify and copy js to dist directory during the build process:
gulp.task('copy-js', function(){
  return gulp.src('app/js/**')
  .pipe(gulpIf('*.js', uglify()))
  .pipe(gulp.dest('dist/js'))
});


// Lint Sass:
gulp.task('scss-lint', function() {
  return gulp.src(['app/scss/**/*.scss', '!app/scss/vendor/**/*.scss'])
    .pipe(sassLint({
      configFile: 'sass-lint-config.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});


// Convert media query breakpoints from SCSS variables to JSON key/value pairs:

var sassJson = require('gulp-sass-json');
 
gulp.task('sass-to-json', function () {
  return gulp
    .src('app/scss/_breakpoints.scss')
    .pipe(sassJson())
    .pipe(gulp.dest('app/js')); // breakpoints.json
});


// Deploy a build to GitHub Pages by running 'deploy':
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
