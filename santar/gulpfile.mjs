import pkg from 'gulp';
const { src, dest, watch, series } = pkg;

import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import cssmin from 'gulp-cssmin';
import sass from 'sass'; // Импортируем sass

// Импортируем gulp-sass как модуль ES
import gulpSass from 'gulp-sass';
const sassCompiler = gulpSass(sass); // Создаем компилятор SASS

const browser = browserSync.create();

// Путь к исходным и выходным директориям
const paths = {
    styles: {
        src: 'src/css/**/*.{scss,sass,css}', // Исходные файлы SASS и CSS
        dest: 'dist/css/' // Папка для выходных файлов
    },
    html: {
        src: 'src/**/*', // Остальные файлы
        dest: 'dist/' // Папка для выходных файлов
    }
};

// Задача для компиляции SASS и CSS
export function styles() {
    return src(paths.styles.src)
        .pipe(sourcemaps.init()) // Инициализация sourcemaps
        .pipe(sassCompiler().on('error', sassCompiler.logError)) // Компиляция SASS
        .pipe(autoprefixer()) // Добавление префиксов
        .pipe(cssmin()) // Минификация CSS
        .pipe(rename({ suffix: '.min' })) // Переименование файла
        .pipe(sourcemaps.write('.')) // Запись sourcemaps
        .pipe(dest(paths.styles.dest)) // Сохранение в выходную папку
        .pipe(browser.stream()); // Обновление браузера
}

// Задача для копирования остальных файлов
export function copy() {
    return src(paths.html.src)
        .pipe(dest(paths.html.dest)); // Копирование в выходную папку
}

// Задача для запуска сервера и наблюдения за изменениями
export function serve() {
    browser.init({
        server: {
            baseDir: './dist' // Базовая директория для сервера
        }
    });

    watch(paths.styles.src, styles); // Наблюдение за изменениями в стилях
    watch(paths.html.src, copy).on('change', browser.reload); // Наблюдение за изменениями в других файлах
}

// Задача по умолчанию
export default series(styles, copy, serve);
