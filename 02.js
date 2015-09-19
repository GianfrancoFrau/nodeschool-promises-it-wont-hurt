var q = require('q');
// create a promise
var defer = q.defer();

// USING Q LIB
// defer.promise.then(
// 	function(value){},
// 	function(error) { 
// 		console.log(error.message);
// 	}
// );
// setTimeout(defer.reject, 300, { message: 'REJECTED!' });

// USING JS
var myReject = new Promise(function(resolve, reject) {
	setTimeout(reject, 300, { message: 'REJECTED!' })
});
myReject.catch(function(error){
	console.log(error.message);
});