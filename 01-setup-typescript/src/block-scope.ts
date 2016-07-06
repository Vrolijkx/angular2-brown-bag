// The below code works with the var keyword.
// Using variables in this way is almost always a coding error.
{
	variableWithVar = 9;
	printInBrowser(`using variableWithVar[${variableWithVar}] before declaration`);

	// x will be hoisted.
	var variableWithVar;
}

printInBrowser(`accesing variableWithVar outside it's declarring block variableWithVar[${variableWithVar}]`);


// To fix this incorrect behavior let and const are introduced
{
	let variableWithLet;
	variableWithLet = 9;
	printInBrowser(`using variableWithLet[${variableWithLet}] only possible after declaration`);
}

// We can not access the let variable outside it's declaring block
// printInBrowser(variableWithLet);

{
	const variableWithConst = 44;
	// this varible is final and can not be changed
	// variableWithConst = 88; //will not compile
	printInBrowser(`using variableWithConst[${variableWithConst}] not changable after declaration`);
}


// Also note that inner variables with the same name don't effect the outer variables with let
// So next code is perfectly ok

for (let i = 0; i < 5; i++) {
	for (let i = 0; i < 7; i++) {
		console.log(i);
	}
}


//helper functions for this tutorial
function printInBrowser(line: string) {
	document.getElementById('block-scoping').innerHTML +=  `${line} </br>`;
}
