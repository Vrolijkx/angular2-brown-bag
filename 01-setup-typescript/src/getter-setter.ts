// lets take a look at an setter
// A nice use case is for lazy loading of object values like the example below
// Mos't of the time i use it to make values read only

class LazyObject {
	// It seems to be a convent to prefix private fields that have a getter or setter with an underscore.
	private _value: number[];

	public get value(): number[] {
		if (!this._value) {
			this._value = new Array(90);
		}

		return this._value;
	}

	public set value(value: number[]) {
		if(value.length === 33) {
			logToDiv(`yes we have 33 values`)
		}

		this._value = value;
	}

	public logInnerValue() {
		logToDiv('inner value: ' + JSON.stringify(this._value));
	}

}

let lazyObject = new LazyObject();
lazyObject.logInnerValue();
logToDiv('value: ' + JSON.stringify(lazyObject.value));
lazyObject.logInnerValue();

lazyObject.value = [44 , 33];
lazyObject.value = new Array(33);



//helper functions for this tutorial
function logToDiv(line: string) {
	document.getElementById('getter-setter').innerHTML +=  `${line} </br>`;
}