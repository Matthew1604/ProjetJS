class Personnage {

	constructor(nom, img, x) {
		this.nom = nom;
		this.img = img;
		this.x = x;
	}

	placer (x) {
		this.img.style.left = x + "px"
		this.img.style.top = "35464 px" 
	}
}