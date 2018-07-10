import gulp from 'gulp'
import babel from 'gulp-babel'
import rename from 'gulp-rename'

gulp.task('package', () =>
  gulp
    .src('./dist.json')
    .pipe(rename('package.json'))
    .pipe(gulp.dest('../dist/pwa-mat'))
)
gulp.task('es6', ['package'], () =>
  gulp
    .src(['**/*.js', '!*.babel.js', '!node_modules/**'])
    .pipe(babel())
    .pipe(gulp.dest('../dist/pwa-mat'))
)
