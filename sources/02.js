var proto = {
	lala: [
		"a",
		"b",
		"c"
	],
	simple: "ok"
};

var obj = Object.create(proto);

// 1)
console.log(obj);

// 2)
console.log(obj.simple);
console.log(obj.lala);

// 3)
proto.lala[0] = "z";
console.log(obj.lala);

// what just happened?
