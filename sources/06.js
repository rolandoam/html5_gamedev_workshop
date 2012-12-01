// closure

var f1 = function () {
	var outside = "1313";
	var tmp = function (x) {
		var secret = "this is private to the closure",
			re = new RegExp(x, "g"); // <~ is the same as /x/g
		console.log(secret.replace(re, "."));
		console.log("outside: " + outside);
	};
	tmp("t");
	console.log("secret is: " + (typeof secret));
};

f1();
