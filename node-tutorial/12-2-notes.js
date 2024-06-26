// npm - global command, comes with node
// npm --version

// local dependency = use it only on this particular project
// npm i <packageName>

// global dependency = use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// FOR DEV DEPENDENCY:  npm i nodemon -D

// UNINSTALL PACKAGE: 'npm uninstall <packageName>'

// FIRST PACKAGE INSTALL 'LODASH':
const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello people');
