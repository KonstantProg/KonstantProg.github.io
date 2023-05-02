let keyboard = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

function drawing() {
	let add = '';
	for (let i = 0; i < keyboard.length; i++) {
		if (i == 12 || i == 24) {
			add += '<br>';
		}
		add += '<div class="key-button" data = " '+ keyboard[i] + '" >' + String.fromCharCode(keyboard[i]) + '</div>';
	};
	document.getElementById('keyboard').innerHTML = add;
};
drawing();