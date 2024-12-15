// Импортируем необходимые модули
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

// Пути к исходникам и папке назначения
const paths = {
  styles: {
    src: 'src/style/scss/**/*.{scss,css}',
    dest: 'dist/style/css'
  },
  files: {
    src: 'src/**/*',
    dest: 'dist/'
  }
};

// Задача для обработки стилей
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init()) // Инициализация sourcemaps
    .pipe(sass().on('error', sass.logError)) // Компиляция SCSS
    .pipe(autoprefixer({
      cascade: false
    })) // Добавление префиксов
    .pipe(cssmin()) // Минификация CSS
    .pipe(rename({ suffix: '.min' })) // Переименование с добавлением .min
    .pipe(sourcemaps.write('./')) // Запись sourcemaps
    .pipe(gulp.dest(paths.styles.dest)) // Сохранение в папке dist
    .pipe(browserSync.stream()); // Обновление браузера
}

// Задача для копирования всех файлов
function copyFiles() {
  return gulp
    .src(paths.files.src)
    .pipe(gulp.dest(paths.files.dest));
}

// Задача для запуска BrowserSync
function serve() {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    notify: false
  });

  // Наблюдение за изменениями в стилях
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.files.src, copyFiles).on('change', browserSync.reload);
  gulp.watch('dist/*.html').on('change', browserSync.reload);
}

// Экспорт задач
exports.styles = styles;
exports.copyFiles = copyFiles;
exports.serve = serve;

// Задача по умолчанию
exports.default = gulp.series(copyFiles, styles, serve);
