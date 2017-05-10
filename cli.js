#!/usr/bin/env node
'use strict';
const pkg = require('./package.json');
const podsay = require('.');

require('taketalk')({
  init(input, options) {
    console.log(podsay(input, options));
  },
  help() {
    console.log(`
  ${pkg.description}

  Usage
    $ podsay <string>
    $ podsay <string> --maxLength 8
    $ echo <string> | podsay

  Example
    $ podsay 'I am a peapod'
    ${podsay('I am a peapod')}`);
  },
  version: pkg.version
});
