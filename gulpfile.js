var gulp = require('gulp');
var url = require('url');
var server = require('gulp-webserver');
var data = require('./data/data.json')
var data2 = require('./data/data2.json')
var obj = {
    data:data,
    data2:data2
}

gulp.task('server',function(){
    gulp.src('.')
        .pipe(server({
            port:9090,
            open:true,
            livereload:true,
            middleware:function(req,res,next){
                if(/\/login/g.test(req.url)){
                    res.setHeader('Content-Type','test/json;charset=UTF-8')
                    res.end(JSON.stringify(obj))
                }
                next()
            }
        }))
})