document.getElementById('btn').onclick = function() {
	var num = 3;
	for (var i = 2; i < 11;) {
		if (num % i === 0) {
			i++;
		} else {
			i = 2;
			num++;
		}
	}
	document.getElementById('result').innerHTML = num;
}