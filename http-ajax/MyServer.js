var http = require("http");

var MyServer = {
	server:function(str){
		http.createServer(function(req,res){
			res.setHeader("Access-Control-Allow-Origin","*");
			res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
			res.write(str);
			res.end();
		}).listen(3000);
		console.log("your server is running at http://localhost:3000");
	}
}
module.exports = MyServer;

//http://h5.jumei.com/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json