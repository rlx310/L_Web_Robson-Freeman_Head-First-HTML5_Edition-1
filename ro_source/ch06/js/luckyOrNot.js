//

window.onload = function() {
    var button = document.getElementById("amilucky");
    button.onclick = getLuck
};

function getLuck() {
	var url = "js/luckyornot.txt";
	var request = new XMLHttpRequest();
	request.onload = function() {
		if (request.status == 200) {
			displayLuck(request.responseText);
		}
	};
	request.open("GET", url);
	request.send(null);
}


function displayLuck(luck) {
	var p = document.getElementById("luck");
	p.innerHTML = luck;
}

