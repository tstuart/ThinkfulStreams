
var stream = require('stream');

// So I think I understand this to be a constructor.
// how is that different for a regular function?
function Transformer(options) {
  stream.Transform.call(this, options);
  this._key = options.key;
  this._value = null;
  this.on('finish', function() {
    Cache.store[this._key] = this._value;
  });
}
Transformer.prototype = Object.create(stream.Transform.prototype);
Transformer.prototype.constructor = stream.Transform;

Transformer.prototype._transform = function(chunk, encoding, callback) {
  // Do not add to buffer if not greater than 100
  if (Number(chunk) < 100) {
   return;
  }
  
  if (!this._value) {
    this._value = chunk;
  } else {
    this._value = Buffer.concat([this._value, chunk]);
  }
  callback();
  
};

module.exports = Transformer;