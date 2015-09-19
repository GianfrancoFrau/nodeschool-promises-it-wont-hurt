var q = require('q');
// create a promise
var deferred = q.defer();

deferred.promise.then(console.log);

deferred.resolve('SECOND');