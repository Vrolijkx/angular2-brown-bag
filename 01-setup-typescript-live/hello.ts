
class Greeter implements Jan {
	naam: string;
	address: number;

	constructor(naam: string = "Bram", address:number = 10) {
		this.naam = naam;
		this.address = address;
	}

	public sayHello(...name: string[]) {
		// setInterval(() => {
		// 	document.body.innerHTML += `hello ${this.naam} from ${name}`;
		// }, 5000);


	}
}


interface Jan {
	naam: string;
	address?: number;
	sayHello: (name: String) => void;
}


let greeter = new Greeter();


let a = [45, 89, 90, 7];

let [b, ...c, d] = a;

alert(d);




greeter.sayHello('jan', 'bram', 'Tom');