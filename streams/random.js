var stream = require('stream');

// So I think I understand this to be a constructor.
// how is that different for a regular function?
function Random(options) {
  stream.Readable.call(this, options);
  this._start = 1;
  this._end = 25;
  this._curr = this._start;
}
Random.prototype = Object.create(stream.Readable.prototype);
Random.prototype.constructor = stream.Readable;

Random.prototype._read = function() {
  
  // what if we wanted to push integers instead of strings?
  var rndNum = Math.floor((Math.random() * 500) + 1);
  var str = '' + rndNum;
  var buf = new Buffer(str, 'ascii');
  this.push(buf);
  this._curr++;
  if (this._curr > this._end) {
    this.push(null);
  }
};

module.exports = Random;