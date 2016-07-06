
let values = ["waarde1", "waarde2", "waarde3"];

// in ES5 we have a for in loop that results in this
showInDiv(`for in loop of ${JSON.stringify(values)}`);
for(let value in values) {
	showInDiv(value);
}

// This will not print the values you expect
// ES6 has fixed this with the for of loop
showInDiv(`for of loop of ${JSON.stringify(values)}`);
for(let value of values) {
	showInDiv(value);
}


//helper functions for this tutorial
function showInDiv(line: string) {
	document.getElementById('for-of').innerHTML +=  `${line} </br>`;
}
