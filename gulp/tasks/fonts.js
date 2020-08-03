module.exports = () => {
    $.gulp.task('fonts:copy', () => {
        return $.gulp.src('./src/static/fonts/**/*.{eot,ttf,woff,woff2}')
                    .pipe($.gulp.dest('build/static/fonts'))
    });
}