var q = require('q');
var defer = q.defer();

function attachTitle(str) {
	return 'DR. ' + str;
};

// USING Q
// #1
// defer.promise.then(function(value) {
// 	console.log(value);
// });
// defer.resolve(attachTitle('MANHATTAN'));


// #2 promise chain
// defer.promise.then(attachTitle).then(console.log);
// defer.resolve('MANHATTAN');

// USING JS
var p = new Promise(function(resolve, reject) {
	resolve('MANHATTAN');
});
p.then(attachTitle).then(console.log);