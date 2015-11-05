var server = require("./server.js");
var router = require("./router.js");
var handler = require('./handler.js');

var handle = {}
handle["/start"] = handler.start;
handle["/upload"] = handler.upload;

server.start(router.route, handle);