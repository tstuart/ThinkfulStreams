
var stream = require('stream');

// So I think I understand this to be a constructor.
// how is that different for a regular function?
function Transformer(options) {
  stream.Transform.call(this, options);
}

Transformer.prototype = Object.create(stream.Transform.prototype);
Transformer.prototype.constructor = stream.Transform;

Transformer.prototype._transform = function(chunk, encoding, callback) {

  if (Number(chunk) >= 400) {
    this.push(chunk, encoding);
  }
  callback();
  
};

module.exports = Transformer;