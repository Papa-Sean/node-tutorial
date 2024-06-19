const http = require('http');

// const server = http.createServer((req, res) => {
//     resizeBy.end('Welcome')
// })

// USING EVENT EMITTER API
const server = http.createServer();
//emits request event
// subscribe to it / listen for it/ respond to it
server.on('request', (req, res) => {
  console.log('somebody just came to the server');
  res.end('Welcome');
});

server.listen(5001);
