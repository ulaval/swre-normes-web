const { watch, src } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
sass.compiler = require('sass');

// Sass/Uglify du thème
function sasser(){
    return src('css/src/normes_ul.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({
        style: 'compressed'
    }))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('css/'))
  };


function uglifier(){
    return src('js/src/*.js')
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('js/'))
  };

  exports.default = function() {
    watch('css/src/**/*.scss', sasser);
    watch('js/src/*.js', uglifier);
  };