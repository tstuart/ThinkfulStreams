
var Random = require('./streams/random');
var Transformer = require('./streams/transformer');
var Writer = require('./streams/writer');

var random = new Random();
var transformer = new Transformer();
var writer = new Writer();

/*
transformer.on('data', function(chunk) {
  console.log(chunk.toString());
});
*/
random.pipe(transformer).pipe(writer);

/*
transformer.pipe(process.stdout);
transformer.write('100');
transformer.write('200');
transformer.write('50');
transformer.write('1000');
transformer.end();
*/

/*
var Alphabet = require('./streams/alphabet');
var Cache = require('./streams/cache');
var alpha = new Alphabet();
var cache = new Cache({ key: 'alpha1' });

alpha.on('data', function(chunk){
  console.log(chunk.toString());
});

alpha.pipe(cache);

cache.on('finish', function() {
  console.log('cache store:', Cache.store);
});



var Random = require('./streams/random');
var Transformer = require('./streams/transformer');
var Cache = require('./streams/cache');

var random = new Random();
var transformer = new Transformer({ key: 'Tim' });
var cache = new Cache({ key: 'alpha1' });

random.pipe(transformer).pipe(cache);

cache.on('finish', function() {
  console.log('cache store:', Cache.store);
});
*/

