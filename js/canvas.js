class Canvas {

	constructor(id, width, height) {
		this.canvas = document.getElementById(id);
		this.canvas.width = width;
		this.canvas.height = height;
		this.canvas.style.marginTop = innerHeight/2 - height/2 + "px";
		this.canvas.style.marginLeft = innerWidth/2 - width/2 + "px";
		this.canvas.ctx = this.canvas.getContext("2d");
		this.canvas.ctx.imageSmoothingEnabled = false;

	}

	setBackground(img) {
		var background = new Image();
		var ctx = this.canvas.ctx;
		background.onload = function() {
			ctx.drawImage(background, 0, 0, 1200, 600);
		};
		background.src = img;
	}
}