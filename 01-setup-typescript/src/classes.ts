//In this example we create a class

class Coordinate {
	private x: number;
	private y: number;

	constructor(x:number, y:number) {
		this.x = x; //the usage of this to access fields is important
		this.y = y;
	}

	// The above constructor + fields can be replaced by next shorthand
	//constructor(private x: number, private y: number) {}

	distanceTo(otherCord: Coordinate): number {
		return Math.sqrt(Math.pow(this.x - otherCord.x, 2) + Math.pow(this.y - otherCord.y, 2));
	}

	// toString is a special method like in java
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
	toString(): string {
		// we use backticks for template strings.
		// template strings can be multiline and have variables inside
		return `[${this.x}, ${this.y}]`;
	}
}

let c1: Coordinate = new Coordinate(20, 15);
let c2: Coordinate = new Coordinate(30, 20);
let distance: number = c1.distanceTo(c2);

document.getElementById('classes').innerHTML =  `Distance between ${c1} and ${c2} is ${distance}`;





