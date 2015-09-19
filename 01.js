var q = require('q');
// create a promise
var defer = q.defer();

// USING Q LIB
// defer.promise.then(console.log);
// setTimeout(defer.resolve, 300, 'RESOLVED!');

// ONLY JS
var myPromise = new Promise(function(resolve, reject) {

	/**
	 * 
	 *	Promise Logic
	 *	
	 *	Do operations ( async db ops, file r/w etc ) and then
	 *	
	 *	if(success) {
	 *		resolve(value)
	 *	} else {
	 *		reject(reason)
	 *	}
	 * 
	 */

	setTimeout(resolve, 300, 'RESOLVED!');
});

// on success
myPromise.then(console.log);
// on error
// myPromise.catch(handler)