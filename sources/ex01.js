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

var NPC = function () {
	this.position = {
		x: 0,
		y: 0
	};
	this.life = 100;
};

NPC.prototype.move = function NPC_move(x, y) {
	this.position.x = x;
	this.position.y = y;
};

NPC.prototype.fight = function NPC_fight(oponent) {
	console.log(this + " is fighting " + oponent);
};

NPC.prototype.status = function NPC_status() {
	console.log("status: " + this.life);
	return this.life;
};

var Villager = function () {};
goog.inherits(Villager, NPC);

Villager.prototype.talk = function Villager_talk(what) {
	console.log("blah blah blah... " + what);
};
