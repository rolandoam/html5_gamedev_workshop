// 1)
var Invader = function () {
	// this is the instance here
	this.position = {x: 100, y: 100};
	this.color = "red";
};

// "new" does the trick
var inv01 = new Invader(),
	inv02 = new Invader();

inv02.color = "blue";

console.log(inv01.color);
console.log(inv02.color);

// 2)
console.log(Invader.prototype);

// 3)
Invader.prototype.speed = {x: 0, y: 0};

var inv03 = new Invader();

console.log(inv03.speed);

// 4)
console.log(inv01.speed);

// 5)
inv03.speed.x = 1e6;
console.log(inv03.speed);
console.log(inv01.speed);
