var httpProxy = require('http-proxy')
  , http = require('http')
  , static = require('node-static')


var railsProxy = new httpProxy.HttpProxy();

var fileServer = new static.Server('./public');

http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response, function (e, res) {
            console.log(e);
            if (e && (e.status === 404)) { // If the file wasn't found
              railsProxy.proxyRequest(request, response, {
                host: 'localhost',
                port: 3000
              });
            }
        });
    });
}).listen(8080);
    
   

