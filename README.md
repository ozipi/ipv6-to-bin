ipv6-to-bin
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

## Contributing

Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
