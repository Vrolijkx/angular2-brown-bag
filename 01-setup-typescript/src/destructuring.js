//lets start with a simple spread operator example
//This function will collect spreaded arguments in an array
function funcWithVariableArgument() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    displayInBrowser("called with argument: " + JSON.stringify(args));
}
funcWithVariableArgument(55, 77, 88, 22);
// We can also spread an array of values to arguments
// For example if we want to use the math.max
var array = [15, 25, 30, 20];
var max = Math.max.apply(Math, array);
displayInBrowser("Math.max of ..." + JSON.stringify(array) + " = " + max);
// We can even use it to spread open the values of an array when creating a new array.
var newArray = [3].concat(array, [44, 8]);
displayInBrowser("" + JSON.stringify(newArray));
// Another new feature is destructuring
// destructuring is a way of extracting variable of an object
var anObject = {
    prop1: 'stringValue',
    prop2: 33,
    prop3: [1, 2, 3]
};
var prop1 = anObject.prop1, prop3 = anObject.prop3;
displayInBrowser("prop1: " + prop1 + ", prop2: " + prop3);
//you can also destructure with arrays
var _a = [9, 'hond'], a = _a[0], b = _a[1];
displayInBrowser("a: " + a + " b: " + b);
//we also can skip values by using an empty place
var _b = [1, 2, 3, 4], c = _b[0], d = _b[2], e = _b[3];
displayInBrowser("c: " + c + " d: " + d + " e: " + e);
function displayInBrowser(line) {
    document.getElementById('destructuring').innerHTML += line + " </br>";
}
