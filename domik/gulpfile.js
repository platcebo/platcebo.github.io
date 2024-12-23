// gulpfile.js
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');

// Путь к директориям
var paths = {
    styles: {
        src: 'src/css/**/*.{scss,css,sass}', // Исходные файлы стилей
        dest: 'dist/css' // Директория для выходных файлов стилей
    },
    other: {
        src: ['src/**/*', '!src/css/**/*'], // Все файлы, кроме файлов в src/css
        dest: 'dist' // Директория для остальных файлов
    }
};

// Задача для компиляции SASS и CSS
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init()) // Инициализация sourcemaps
        .pipe(sass().on('error', sass.logError)) // Компиляция SASS
        .pipe(autoprefixer()) // Автопрефиксация
        .pipe(cssmin()) // Минификация CSS
        .pipe(rename({ suffix: '.min' })) // Переименование с добавлением .min
        .pipe(sourcemaps.write('.')) // Запись sourcemaps
        .pipe(gulp.dest(paths.styles.dest)) // Сохранение в dist/css
        .pipe(browserSync.stream()); // Обновление браузера
}

// Задача для копирования остальных файлов
function copy() {
    return gulp.src(paths.other.src)
        .pipe(gulp.dest(paths.other.dest)); // Копирование в dist
}

// Задача для запуска сервера
function serve() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch(paths.styles.src, styles); // Наблюдение за изменениями в стилях
    gulp.watch(paths.other.src, copy).on('change', browserSync.reload); // Наблюдение за изменениями в других файлах
}

// Экспорт задач
exports.styles = styles;
exports.copy = copy;
exports.serve = serve;
exports.default = gulp.series(styles, copy, serve); // Запуск по умолчанию
