class Decor {

	constructor(id, width, height) {
		this.canvas = document.getElementById(id);
		this.canvas.width = width;
		this.canvas.height = height;
		this.canvas.style.marginTop = innerHeight/2 - height/2 + "px";
		this.canvas.style.marginLeft = innerWidth/2 - width/2 + "px";
		this.ctx = this.canvas.getContext("2d");

	}

	
	afficherFond() {
		var fond = new Image();
        fond.src = "img/fond.jpg";
        d.ctx.drawImage(fond, 0, 0);
	}
}