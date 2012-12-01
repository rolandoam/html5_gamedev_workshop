// 1)
(function () {
	// closure
	var a = "something hidden";
	console.log("a: " + a);
})();
console.log("what is a? " + a); // <~ `a` does not exist here


// 2)
// classic example, factorial[1]
var factorial = function factorial(n) {
	if (n <= 1) {
		return 1;
	}
	return n * factorial(n - 1);
};

console.log(factorial(20));

// 3)
var empty = function empty() {
	if (arguments.length == 1) {
		console.log("?? " + arguments[0]);
	} else {
		console.log("++ " + arguments.join(", "));
	}
};
empty();
empty("lala");
empty("1", 2, 3, 4, "z", "q");

/**
 * [1]: http://en.wikipedia.org/wiki/Factorial
 */
