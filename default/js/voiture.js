class Vehicule {
	constructor(name) {
		this.name = name || "véhicule";
	}
}
class Voiture extends Vehicule {
	constructor(name) {
		super();
		this.name = name || "véhicule";
		this.roues = 4;
		this.moteur = {
				puissance : 60,
				marche : false
		};
		this.voyants = {
			marche : false;
		}
	}
}
contact() {
	console.log("On allume le contact");
	this.allumerLesVoyants();
}
allumerLesVoyants() {
	console.log("on allume les Voyants");
	this.voyants.marche = true;
}
decontact() {
	console.log("on coupe le contact");
	this.eteindrelesVoyants();
}
eteindrelesVoyants(){
	console.log("Les voyants s'éteignent");
	this.voyants.marche = false;
}
demarre() {
	console.log("Demarre le moteur");
	this.moteur.marche = true;
}
coupe() {
	console.log("On coupe le moteur");
}

class Sportive extends Voiture {
	constructor(name) {
		super(name || "sportive");
		this.moteur.marche = false;
		this.portes = 3;
		this.moteur.puissance = 450;
	}
}
const test_voiture = () => {
	console.log("test vehicule");

	let maVoiture = new Sportive("maSportive");
	console.log(maVoiture.moteur.marche);

	maVoiture.contact();
	maVoiture.demarre();
	console.log(maVoiture.moteur.marche);

	let usine =[];
	for(let i = 0; i < 10000; i++) usine.push(new Sportive());
	console.log(usine);
};
