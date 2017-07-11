var canvas;

function drawRectangle(){
	canvas = document.getElementById('board');
	var ctx = canvas.getContext("2d");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	ctx.fillRect(50, 50, 100, 100);

}

window.addEventListener('load', drawRectangle());
