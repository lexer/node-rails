var httpProxy = require('http-proxy');
    
//
// Http Proxy Server with Proxy Table
//
httpProxy.createServer(3000, 'localhost').listen(8000);
