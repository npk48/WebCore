//var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database(__dirname + '/home.db');
//
//db.serialize(function () {
//	
//	db.run('CREATE TABLE lorem (info TEXT)');
//	var stmt = db.prepare('INSERT INTO lorem VALUES (?)');
//	
//	for (var i = 0; i < 10; i++) {
//		stmt.run('Ipsum ' + i);
//	}
//	
//	stmt.finalize();
//	
//	db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
//		console.log(row.id + ': ' + row.info);
//	});
//});
//
//db.close();

var model = [];
model['data'] = { persons: ['大小姐', '成成', '富贵', '酱油', '破毛', '青年A', '胸针', '战5'] };
module.exports = model;