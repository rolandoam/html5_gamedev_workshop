// iteration

var arr = ["a", "b", "c", "d", "e"];

// 1) easy way
for (var i in arr) {
	// how to fill the for?
}


for (var i in arr) {
	console.log(arr[i]);
}


// 2) c-like

for (var i=0; i < arr.length; ++i) {
	console.log(arr[i]);
}

// 3) c-like, but more efficient, len is queried only once
for (var i=0, len=arr.length; i < len; ++i) {
	console.log(arr[i]);
}

// 4) forEach, but not for now
