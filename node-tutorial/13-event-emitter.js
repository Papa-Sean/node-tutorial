// ORDER MATTERS LISTEN FOR EVENT BEFORE YOU CAN EMIT THE EVENT

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic here`);
});

customEmitter.emit('response', 'john', 34);
