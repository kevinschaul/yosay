#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var podsay = require('./');

require('taketalk')({
  init: function (input, options) {
    console.log(podsay(input, options));
  },
  help: function () {
    console.log([
      '',
      '  ' + pkg.description,
      '',
      '  Usage',
      '    podsay <string>',
      '    podsay <string> --maxLength 8',
      '    echo <string> | podsay',
      '',
      '  Example',
      '    podsay "I am a peapod"',
      podsay('I am a peapod')
    ].join('\n'));
  },
  version: pkg.version
});
