function sum(arr) {
	return arr.reduce(function(a, b){
		a = a + b;
		return a;
	}, 0);
}

module.exports.sum = sum;
