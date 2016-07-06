//lets start with a simple spread operator example

//This function will collect spreaded arguments in an array
function funcWithVariableArgument(...args) {
	displayInBrowser(`called with argument: ${JSON.stringify(args)}`)
}

funcWithVariableArgument(55, 77, 88, 22);

// We can also spread an array of values to arguments
// For example if we want to use the math.max
let array = [15, 25, 30, 20];

let max = Math.max(...array);
displayInBrowser(`Math.max of ...${JSON.stringify(array)} = ${max}`)

// We can even use it to spread open the values of an array when creating a new array.
let newArray = [3, ...array, 44, 8];
displayInBrowser(`${JSON.stringify(newArray)}`);


// Another new feature is destructuring
// destructuring is a way of extracting variable of an object
let anObject = {
	prop1: 'stringValue',
	prop2: 33,
	prop3: [1, 2, 3]
};

let {prop1, prop3} = anObject;
displayInBrowser(`prop1: ${prop1}, prop2: ${prop3}`);

//you can also destructure with arrays
let [a, b] = [9, 'hond'];
displayInBrowser(`a: ${a} b: ${b}`);

//we also can skip values by using an empty place
let [c,,d,e] = [1,2,3,4];
displayInBrowser(`c: ${c} d: ${d} e: ${e}`);


function displayInBrowser(line: string) {
	document.getElementById('destructuring').innerHTML +=  `${line} </br>`;
}