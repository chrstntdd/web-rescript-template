// Generated by ReScript, PLEASE EDIT WITH CARE

function hey(param) {
	console.log("Hello", "world")
	var l = [1, 2, 3, 4, 5]
	var _acc = 0
	var _i = 0
	while (true) {
		var i = _i
		var acc = _acc
		if (l.length === ((i + 1) | 0)) {
			return acc
		}
		var curr = l[1]
		_i = (i + 1) | 0
		_acc = (acc + curr) | 0
		continue
	}
}

export { hey }
/* No side effect */