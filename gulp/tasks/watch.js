module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./src/static/scss/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./src/static/img/**/*.{png,jpeg,jpg,gif}', $.gulp.series('img:dev'));
    });
}