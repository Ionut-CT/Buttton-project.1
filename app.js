const btn = document.querySelector('button');

function random(number) {
	return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function() {
	const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	document.body.style.backgroundColor = rndCol;
}

function roll() {
	var Chance = Math.floor(Math.random() * (3 - 1 + 1) + 1);
	var Winner = Math.floor(Math.random() * (3 - 1 + 1) + 1);
	if (Chance == Winner) {
		alert("Congratulations! You pressed the winning button!");
	} else {
		alert("Sorry, this time you weren't lucky. Keep trying!");
	}
};
