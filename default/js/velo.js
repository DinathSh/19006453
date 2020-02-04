class Vehicule {
	constructor(name) {
		this.name = name || "véhicule";
	}
}
class Velo extends Vehicule {
	constructor(name) {
		super();
		this.name = name || "véhicule";
		this.roues = 2;
		this.pedale = {
				marche : false
		};
	}


demarre() {
	console.log("Commence à pédaler");
	this.pedale.marche = true;
}
arret() {
	console.log("On arrete de pedaler");
}
}


const test_velo = () => {
	console.log("test vehicule");

	let monvelo = new Velo("mon vélo");
	console.log(monvelo.pedale.marche);

	monvelo.demarre();
	console.log(monvelo.pedale.marche);

	let usine =[];
	for(let i = 0; i < 10000; i++) usine.push(new Velo());
	console.log(usine);
};
