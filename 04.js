var q = require('q');
// create a promise
var deferred = q.defer();

// USING Q
// console.log('FIRST');
// deferred.promise.then(console.log);
// deferred.resolve('SECOND');

// USING JS
var p = new Promise(function(resolve, reject){
	resolve('SECOND');
});
p.then(console.log);
console.log('FIRST');