/**
 * Created by ryansbeans on 2017/9/7.
 */
var http = require('http');
//开始你的mysql连接


var server = http.createServer(function (req, res) {
    //如果你发一个GET到http://127.0.0.1:9000/test
    var url_info = require('url').parse(req.url, true);
    //检查是不是给/test的request
    if(url_info.pathname === '/test'){
        console.log("111313")
        return "哈哈哈哈"
    }
    //这个是用来回复上面那个post的，显示post的数据以表示成功了。你要是有别的目标，自然不需要这一段。
    else{
        req.pipe(res);
    }
});
server.listen(9000, '127.0.0.1');
//在server关闭的时候也关闭mysql连接
server.on('close',function(){

});
console.log('listening on port  9000');