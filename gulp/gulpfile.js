const gulp = require('gulp');

gulp.task('mensagem', function(){
    return console.log("Olá mundo!!")
})

gulp.task('copiarHTML', function(){
    gulp.src('src/*.html').pipe(gulp.dest('destino'))
})