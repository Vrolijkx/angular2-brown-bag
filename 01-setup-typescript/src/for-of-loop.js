var values = ["waarde1", "waarde2", "waarde3"];
// in ES5 we have a for in loop that results in this
showInDiv("for in loop of " + JSON.stringify(values));
for (var value in values) {
    showInDiv(value);
}
// This will not print the values you expect
// ES6 has fixed this with the for of loop
showInDiv("for of loop of " + JSON.stringify(values));
for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
    var value = values_1[_i];
    showInDiv(value);
}
//helper functions for this tutorial
function showInDiv(line) {
    document.getElementById('for-of').innerHTML += line + " </br>";
}
