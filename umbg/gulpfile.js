var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');

function styleSass (done) {
    gulp.src('./src/css/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false,
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());

    done()
}

function styleCss(done) {
    gulp.src('./src/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(cssmin())
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 8 versions'],
        browsers: [
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 11',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6',
        ],
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());

    done()
}

function file(done) {
    gulp.src('./src/font/**/*')
    .pipe(gulp.dest('./dist/font'))
    .pipe(browserSync.stream());

    gulp.src('./src/favicon/**/*')
    .pipe(gulp.dest('./dist/favicon'))
    .pipe(browserSync.stream());

    gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/img'))
    .pipe(browserSync.stream());

    gulp.src('./src/js/**/*')
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());

    gulp.src('./src/php/**/*')
    .pipe(gulp.dest('./dist/php'))
    .pipe(browserSync.stream());
    
    gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());

    done()
}

function sync(done){
    browserSync.init({
        notify: true,
        startPath: './dist/index.html',
        reloadOnRestart: true,
        server: ({
            baseDir: "./"
        }),
        port: 3000
    })

    done()
}

function watch() {
    gulp.watch("./src/favicon/**/*" , file);
    gulp.watch("./src/img/**/*" , file);
    gulp.watch("./src/font/**/*" , file);
    gulp.watch("./src/js/**/*" , file);
    gulp.watch("./src/php/**/*" , file);
    gulp.watch("./src/**/*.html" , file);
    gulp.watch("./src/css/**/*.sass" , styleSass);
    gulp.watch("./src/css/**/*.css" , styleCss);
}

exports.default = gulp.series(file, styleCss, styleSass, gulp.parallel(watch, sync))