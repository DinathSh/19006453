window.addEventListener("load", event => main());

const main = () => {

	console.log("MAIN");
	test_voiture();
	return test_voiture;
	let user = {
		firstName : "Dinath",
		lastName : "Sunthararajah",
		age : 18,
		adress : "adress@gmail.com",
		phone : 06931504655,

	    };

	   // console.log("bonjour,"+user.firstName+""+user.lastName + "!");
	   // console.log("bonjour,",capFirstLetter(user.firstName),capFirstLetter(user.lastName),"!");

	    //let capFirstName = user.firstName.charAt(0).toUpperCase();

	    //console.log(capFirstName);

	    //console.log(testPileOuFace (250000)) ;
	    let tab = [];
	    for(let i = 0; i < 500; i++) tab.push(i);
	    //tab.forEach(element => console.log(element));
	    //let by2 = tab.map(element => element * 2);
	    //console.log(by2);

	    let num = tab.reduce(acc, element) => {
			return acc + element;
	    console.log(num);
	    }
			const testPileOuFace = amount  =>  {
	    let result = {pile: 0, face: 0};
	    for(let i = 0; i < amount; i++) result[pileOuFace()]++;
		return result;
	};
	const capFirstLetter = value => value.charAt(0).toUpperCase() + value.slice(1);

	const pileOuFace = () => Math.random() > 0.5 ? "face" : "pile";
