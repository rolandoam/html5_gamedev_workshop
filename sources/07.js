/**
 * @param {function()} cb The callback
 * @param {Object=} obj The object to bind the callback with (the `this` object for the callback)
 */
var thisWillTakeALongTime = function (cb, obj) {
	// this is more or less like sleep(1 seg);
	setTimeout(function () {
		// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/call
		cb.call(obj);
	}, 1000);
};

/*
console.log("about to enter thisWillTakeALongTime");
thisWillTakeALongTime(function () {
	console.log("it did take a long time!");
	console.log("this is: " + this);
});

thisWillTakeALongTime(function () {
	console.log("it did take a long time!");
	console.log("this is: " + this);
}, {foo: "poo"});
*/

// how to bind callbacks

var Enemy = function () {
	this.name = "the bad guy";
};
Enemy.prototype.theCallback = function () {
	console.log(this.name);
};

var e = new Enemy();
// what will happen here?
thisWillTakeALongTime(e.theCallback);

// and here?
thisWillTakeALongTime(e.theCallback, e);

// another way to bind the callback and the object
thisWillTakeALongTime(e.theCallback.bind(e));
