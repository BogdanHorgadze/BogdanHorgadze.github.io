const gulp = require('gulp'),
sass = require('gulp-sass');


gulp.task('stylesheet', async () => {
await gulp.src('sass/**/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('css/'));
});

gulp.task('watch', async () => {
await gulp.watch('sass/**/*.scss', gulp.series('stylesheet'));
});
