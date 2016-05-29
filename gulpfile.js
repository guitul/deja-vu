var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    wrap = require('gulp-wrap'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    minifyCSS = require('gulp-cssnano'),
    minifyJS = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    minifyHTML = require('gulp-htmlmin'),
    templateCache = require('gulp-angular-templatecache');

var paths = {
    scripts: 'app/**/*.js',
    styles: 'assets/css/**/*.*',
    images: 'assets/img/**/*.*',
    templates: 'app/**/*.html',
    index: 'index.html',
    fonts: 'assets/components/**/*.{ttf,woff,woff2,eof,svg}',
};

var options = {
    module: 'DejaVu'
};

/**
 * Concat and minify JS/CSS files
 */
gulp.task('usemin', ['build-app'], function() {
    return gulp.src(paths.index)
        .pipe(usemin({
            js: [minifyJS(), 'concat'],
            css: [minifyCSS({keepSpecialComments: 0}), 'concat'],
        }))
        .pipe(gulp.dest('dist'));
});

/**
 * Copy assets
 */
gulp.task('copy-assets', ['copy-fonts', 'copy-images']);

gulp.task('copy-fonts', function() {
    return gulp.src(paths.fonts)
        .pipe(rename({
            dirname: '/fonts'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-images', function() {
    return gulp.src(paths.images)
        .pipe(gulp.dest('dist/img'));
});

/**
 * Handle app files
 */
gulp.task('build-app', ['build-js', 'build-templates']);

gulp.task('build-js', function() {
    return gulp.src(paths.scripts)
        .pipe(minifyJS())
        .pipe(concat('dejavu.js'))
        .pipe(gulp.dest('dist/build'));
});

gulp.task('build-templates', function() {
    return gulp.src(paths.templates)
        .pipe(minifyHTML())
        .pipe(templateCache(options))
        .pipe(gulp.dest('dist/build'));
});

/**
 * Watch files
 */
gulp.task('watch', function() {
    gulp.watch([paths.images], ['copy-images']);
    gulp.watch([paths.styles], ['usemin']);
    gulp.watch([paths.scripts], ['build-js', 'usemin']);
    gulp.watch([paths.templates], ['build-templates', 'usemin']);
    gulp.watch([paths.index], ['usemin']);
});

/**
 * Live reload server
 */
gulp.task('webserver', function() {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8888
    });
});

gulp.task('livereload', function() {
    gulp.src(['dist/**/*.*'])
        .pipe(watch(['dist/**/*.*']))
        .pipe(connect.reload());
});

/**
 * Gulp tasks
 */
gulp.task('build', ['copy-assets', 'build-app', 'usemin']);
gulp.task('default', ['build', 'webserver', 'livereload', 'watch']);