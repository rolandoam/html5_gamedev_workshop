/**
 * prototype inheritance
 */

var proto = {
	nombre: "banana",
	tipo: "fruta",
	color: "amarillo"
}; // <~ semi-colon at the end!!!

// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create
var obj = Object.create(proto);

// 1) console.log(obj.nombre);

// 2) console.log(obj);

/** 3)
obj.nombre = "palito";

console.log(obj.nombre);

console.log(obj);
*/
