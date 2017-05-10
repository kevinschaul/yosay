'use strict';
const chalk = require('chalk');
const yosay = require('../');

/*
 * Yo. Fire this file locally with `node test/manual-test.js` at least after you
 * have newly generated the text fixtures to double check that all available
 * option have a correct looking output.
 * Thanks (ᵔᴥᵔ)
 */

console.log(yosay('Hello, and welcome to my fantastic generator full of whimsy and bubble gum!'));

console.log(yosay('Hi'));

console.log(yosay('Welcome to Yeoman, ladies and gentlemen!'));

console.log(yosay('Hi', {maxLength: 8}));

console.log(yosay('Hello, buddy!', {maxLength: 4}));

console.log(yosay(chalk.red.bgWhite('Hi')));

console.log(yosay(chalk.red.bgWhite('Hi') + ' there, sir!'));

console.log(yosay(chalk.red.bgWhite('Hi') + ' there, sir! ' + chalk.bgBlue.white('you are looking') + ' swell today!'));

console.log(yosay('first line\nsecond line\n\nfourth line'));

console.log(yosay('项目可以更新了'));

console.log(yosay('iloveunicornsiloveunicornsiloveunicornsiloveunicornsiloveunicornsiloveunicorns'));

console.log(yosay('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', {maxLength: 11}));
console.log(yosay('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));
console.log(yosay('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', {maxLength: 11}));
console.log(yosay('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', {maxLength: 26}));

console.log(yosay(
  'That’s it. Feel free to fire up the server with ' +
  chalk.green('`npm run start:dev`') +
  'or use our subgenerator to create endpoints.'
));

console.log(yosay('That’s it. Feel free to fire up the server with `npm run start:dev` or use our subgenerator to create endpoints.'));

console.log(yosay(
  'That’s it. Feel free to fire up the server with ' +
  chalk.green('`npm run start:dev`') + '.'
));

console.log(yosay(
  'That’s it. Feel free to fire up the server with ' +
  '`npm run start:dev`.'
));
