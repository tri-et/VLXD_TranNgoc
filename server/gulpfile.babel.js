import gulp from 'gulp'
import babel from 'gulp-babel'

gulp.task('package', () => gulp.src(['./package.json', '.env']).pipe(gulp.dest('../dist/pwa-mat')))
gulp.task('es6', ['package'], () =>
  gulp
    .src(['**/*.js', '!*.babel.js', '!node_modules/**'])
    .pipe(babel())
    .pipe(gulp.dest('../dist/pwa-mat'))
)
