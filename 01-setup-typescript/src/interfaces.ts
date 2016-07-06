// Typescript interfaces are very useful.
// Unlike with java where you can only define methods on an interface.
// Typescript interfaces can also define fields.

interface Pirate {
	name?: string; //Not every pirate has a name. This is an optional field;
	parrot: boolean;
	bottlesOfRumInBelly: number;

	//function with no arg that returns a string
	sayArrr: () => string;
}


//We can use an interface just like we would in Java

class DrunkPirate implements Pirate {
	//if we don't add the neede field compilation will fail
	name: string = 'bram';
	parrot: boolean = true;
	bottlesOfRumInBelly: number = 3;

	sayArrr(): string {
		return 'hik hik arrrh hik';
	};
}

let bramTheDrunkPirate: Pirate = new DrunkPirate();
showInBrowser(`Bram the drunk pirate says: "${bramTheDrunkPirate.sayArrr()}"`);

// But we also can create an instance on the fly from a js object
// This comes in very handy for passing configuration objects as an argument. Or for making REST results typeSafe.
let nielsTheSoberPirate: Pirate = {
	parrot: false,
	bottlesOfRumInBelly: 0,
	sayArrr: function(): string {
		return 'arrrh!!!';
	}
};

showInBrowser(`Niels the sober pirate says: "${nielsTheSoberPirate.sayArrr()}"`);


// If we look the generated code we can't find the Pirate interface.
// This is because interfaces only exist at compile time and can't be translated to js.
// This has the downside that the next only works with classes.
let isBramADrunkenPirate = bramTheDrunkPirate instanceof DrunkPirate;
let isNielsADrunkenPirate = nielsTheSoberPirate instanceof DrunkPirate;

showInBrowser(`Are these pirates drunk? bram: ${isBramADrunkenPirate} niels: ${isNielsADrunkenPirate}`);

// The next lines won't compile. Because we can't check it.
// let isBramAPirate = bramTheDrunkPirate instanceof Pirate;
// let isNielsAPirate = nielsTheSoberPirate instanceof Pirate;

// So keep in mind interfaces only exist at compile time


// Another difference between typescript interfaces(typing) and java typing is that typescript uses duck typing.
// lets look at an example

interface RumDrinkingPerson {
	name: string;
	bottlesOfRumInBelly: number;
}

let steven: RumDrinkingPerson;

// We have created a variable that can hold a rumDrinking person named steven
// we can now asign it like above:

steven = { name: 'steven', bottlesOfRumInBelly: 5};
showInBrowser(`This is steven the rum drinking person: ${JSON.stringify(steven)}`);

// But we can also do the following
steven = new DrunkPirate();
showInBrowser(`This is drunk pirate as a rum drinking person: ${JSON.stringify(steven)}`);

// Note that there is no link between DrunkPirate/Pirate and RumDrinkingPerson.
// But we can still assing our DrunkPirate because it has all the needed fields of a RumDrinkingPerson
// This is the so called duck typing.

// Note that the next line won't compile because niels is a only a Pirate.
// The name property of a pirate is optional but it's required for a RumDrinkingPerson

// steven = nielsTheSoberPirate;


//Utility functions used in example

function showInBrowser(line: string) {
	document.getElementById('interfaces').innerHTML +=  `${line} </br>`;
}