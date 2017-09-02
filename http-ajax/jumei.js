/**
 * 参考链接  ---- ele的协议为https,所以采用https模块
 * 	http://nodejs.cn/api/https.html#https_https_request_options_callback
 * 
 * 1、引入https模块
 * https.request(options[, callback])
 * 	options:向一个安全的服务器发起一个请求。
 * 
 * 	
 */
//http://h5.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=
//http://h5.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=
var http = require("http");
var MyServer = require("./MyServer.js");
//2、配置对象
//https://mainsite-restapi.ele.me/shopping/v2/entries?latitude=34.774199&longitude=113.6695957&templates[]=main_template
var options = {
  hostname: 'h5.jumei.com',
  port: 80,//如果是https协议均为443，如果为http协议，此值为80
  path: '/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=',
  method: 'GET'
};

//3、
var req = http.request(options,function(res){
	//请求成功
//	console.log(res);
	var htmlStr = "";
	//有数据接收到时触发
	res.on("data",function(html){
//		console.log(html.toString())
		htmlStr += html;
	});
	//数据接受完毕
	res.on("end",function(){
		console.log(htmlStr);
		MyServer.server(htmlStr)
	});
	
});
req.on("error",function(err){
	console.log(err);
});
req.end();
