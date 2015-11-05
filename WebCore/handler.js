function start(response, query, data) {
	//querystring(string)["foo"]
	console.log("start reached");
	var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>';
	
	response.writeHead(200, { "Content-Type": "text/html" });
	response.write(body);
	response.end();
}

function upload(response, query, data) {
	console.log("upload reached");
	response.writeHead(200, { "Content-Type": "text/plain" });
	response.write("You've sent: " + data);
	response.end();
}

exports.start = start;
exports.upload = upload;