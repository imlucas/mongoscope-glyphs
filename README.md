# mongoscope-glyphs

## Todo

- [ ] find the gulp task that converts an svg font file to individal png's
- [ ] include pngs in repo
- [ ] Add examples with the actual pngs here

## Making Changes

1. Edit `mongoscope.glyphs`
2. From Glyphs, export to `mongoscope.otf`
3. `npm run-script` to generate

## Using

Meant to be used with [bootstrap][bootstrap] (uses the `@icon-font-path` 
variable) and [Font Awesome][fa].  `npm install --save-dev mongoscope-glyphs`
and then mixin the below with your existing app gulpfile:

```javascript
gulp.task('assets', function(){
  return gulp.src('node_modules/mongoscope-glyphs/*.{eot,svg,woff,ttf}')
    .pipe('./static/fonts');
});

gulp.task('less', function(){
  var opts = {
    paths: [
        'node_modules/mongoscope-glyphs'
      ]
    };
  return gulp.src('your-file.less')
    .pipe(require('gulp-less')(opts))
    .pipe(gulp.dest('./static/css'));
});
```

[bootstrap]: http://getbootstrap.com/css/#less-variables-icons
[fa]: http://fontawesome.github.io/Font-Awesome