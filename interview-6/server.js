var connect = require('connect');
var serveStatic = require('serve-static');
var http = require('http');
 
var port = 8001;

var app = connect();
app.use(serveStatic('build/'));
 
http.createServer(app).listen(port);

console.log('Server started. Port: ' + port);
