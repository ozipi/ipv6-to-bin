ipv6-to-bin [![npm version](https://img.shields.io/npm/v/ipv6-to-bin.svg?style=flat)](https://www.npmjs.com/package/ipv6-to-bin) [![Build Status](https://travis-ci.org/ozipi/ipv6-to-bin.svg?branch=master)](https://travis-ci.org/ozipi/ipv6-to-bin) [![Coverage Status](https://coveralls.io/repos/github/ozipi/ipv6-to-bin/badge.svg?branch=master)](https://coveralls.io/github/ozipi/ipv6-to-bin?branch=master)
=========

A small method to convert an ipv6 from hex to binary keeping the format _:_:_:_:_:_:_:_ (8 segments)

## Installation

  npm install ipv6-to-bin --save

## Usage

  var ipv6ToBin = require('ipv6-to-bin');
  
  var localhost = ipv6ToBin('0000:0000:0000:0000:0000:0000:0000:0001');

  console.log('routerIp', routerIp);

## Tests

  npm test
  
## Todo
  add :: support
  add :0: support
  add :102: support

## Contributing

Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.1 modified readme
* 0.1.0 Initial release


