const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('hello world');
});

server.listen(5001, () => {
  console.log('Server is listening on port : 5001....');
});
