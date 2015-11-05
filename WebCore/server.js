var http = require('http');
var url = require("url");
var querystring = require("querystring");
var port = process.env.port || 1337;


function start(router, handle) {
	http.createServer(function (request, response) {
		var pathname = url.parse(request.url).pathname;
		var query = url.parse(request.url).query;		
		var data = "";
		request.setEncoding("utf8");
		request.addListener("data", function (chunk) {
			data += chunk;
		});
		request.addListener("end", function () {
			router(handle, pathname, response, query, data);
		});
	}).listen(port);
}

exports.start = start;