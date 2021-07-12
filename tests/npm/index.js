var http = require('http');
var _ = require('underscore');

var responses = ['World', 'World!'];

var server = http.createServer(
  function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello ' + _.sample(responses));
  }
);

server.listen(8080, '127.0.0.1',
  function () {
    console.log('Server listening on port 8080');
  }
);
