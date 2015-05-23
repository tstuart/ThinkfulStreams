

var stream = require('stream');

function Writer(options) {
    stream.Writable.call(this, options);
}
Writer.prototype = Object.create(stream.Writable.prototype);
Writer.prototype.constructor = stream.Writable;

Writer.prototype._write = function(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
};

module.exports = Writer;
