
//Show enums

enum TestEnum {
	JAN,
	RONNY,
	WALTER
}

//Show multiple types example type

function checkIfOk(value: string|any[]) {
	return value.length > 20
}

checkIfOk('kristof geeft demo');
checkIfOk([3,4,58,8]);

//Declare your own types

type Selection2 = 'selected' | 'unselected';
type SelectionListener = (s: Selection2) => void;

function registerListener(l: SelectionListener) {
	l('selected');
}


registerListener((s) => console.log("feest"));