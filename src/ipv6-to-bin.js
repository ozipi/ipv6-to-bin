var hexToBinary = require('hex-to-binary');

function ipv6ToBin(ip) {
	var ipSplit = ip.split(":");
	var result = [];
	for (var i = 0; i < ipSplit.length; i++) {
		var binarySegment = hexToBinary(ipSplit[i]);
		result.push(binarySegment);
	}

	return result.join(":");
}

module.exports = ipv6ToBin;
