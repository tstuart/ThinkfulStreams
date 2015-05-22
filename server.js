
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
*/

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


