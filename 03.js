var q = require('q');
// create a promise
var deferred = q.defer();

// USING Q
// deferred.promise.then(console.log, console.log);
// deferred.resolve('I FIRED');
// deferred.reject('I DID NOT FIRE');

// USING JS
var p = new Promise(function(resolve, reject){
	resolve('I FIRED');
	reject('I DID NOT FIRE');
});
p.then(console.log).catch(console.log);