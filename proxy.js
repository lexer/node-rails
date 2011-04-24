var httpProxy = require('http-proxy');
   
//
// Http Proxy Server with Proxy Table
//
httpProxy.createServer(9797, 'localhost').listen(8000);

var railsProxy = new httpProxy.HttpProxy();

function proxyRails(req, res, next){
  railsProxy.proxyRequest(req, res, {
    host: 'localhost',
    port: 3000
  });
}

var connect = require('connect');

var server = connect.createServer();

server.use(connect.static(__dirname + '/public'));
server.use(proxyRails);

server.listen(9797);
