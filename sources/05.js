var goog = {};
goog.inherits = function(childCtor, parentCtor) {
  /** @constructor */
  function tempCtor() {};
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  /** @override */
  childCtor.prototype.constructor = childCtor;
};

var Enemy = function () {
	this.type = 1;
};

Enemy.prototype.blink = function Enemy_blink() {
	console.log("blink");
};

Enemy.prototype.punch = function Enemy_punch(dy) {
	console.log("I'm punching: " + dy);
};

var BigBoss = function () {
	Enemy.call(this);
};
goog.inherits(BigBoss, Enemy);


BigBoss.prototype.blink = function BigBoss_blink() {
	console.log("blink harder");
	// 3)
	// Enemy.prototype.blink.call(this);
};

// 4)
BigBoss.prototype.punch = function BigBoss_punch(dy) {
	// boss punchs harder
	Enemy.prototype.punch.call(this, dy * 2);
};


var e = new Enemy();
e.blink();

var b = new BigBoss();
b.blink();


// 5)
e.punch(5);
b.punch(5);
