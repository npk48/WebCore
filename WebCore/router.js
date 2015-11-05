fs = require('fs');

readFile = function (response, pathname) {
	fs.readFile(pathname, function (error, data) {
		if (error) {
			response.writeHead(404, { 'content-type': 'text/html' });
			response.write('File not found: ' + pathname);
			response.end();
		}
		else {
			response.writeHead(200, { 'content-type': 'text/html' });
			response.write(data);			
			response.end();
		}
	});
}

function route(handle, pathname, response, query, data) {
	console.log("routing to " + pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, query, data);
	} else {
		if (pathname == '/' || pathname == '/index.html') {
			readFile(response, './site/'+'index.html');
		}
		else {
			readFile(response, './site' + pathname);
		}
	}
}

exports.route = route;