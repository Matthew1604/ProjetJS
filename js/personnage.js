class Personnage {

	constructor(nom, img, canvas, x) {
		this.nom = nom;
		this.img = img;
		this.canvas = canvas;
		this.x = x;
	}

	placer () {
		var img = new Image();
		var ctx = this.canvas.ctx;
		var canvasHeight = this.canvas.height;
		var x = this.x;
		img.onload = function () {
			ctx.drawImage(img, x - img.width/2, canvasHeight - img.height);
		};
		img.src = this.img;
	}

	deplacer() {

	}
}