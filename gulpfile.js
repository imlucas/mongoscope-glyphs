var gulp = require('gulp'),
  through2 = require('through2'),
  libfontfacegen = require('fontfacegen');

function fontfacegen(opts){
  var stream = through2.obj(function(file, enc, cb) {
    opts.source = file.path;
    libfontfacegen(opts);
    this.push(file);
    return cb();
  });
  return stream;
}

gulp.task('default', function(){
  return gulp.src('mongoscope.otf')
    .pipe(fontfacegen({dest: './'}));
});
