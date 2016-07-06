// Typescript interfaces are very useful.
// Unlike with java where you can only define methods on an interface.
// Typescript interfaces can also define fields.
//We can use an interface just like we would in Java
var DrunkPirate = (function () {
    function DrunkPirate() {
        //if we don't add the neede field compilation will fail
        this.name = 'bram';
        this.parrot = true;
        this.bottlesOfRumInBelly = 3;
    }
    DrunkPirate.prototype.sayArrr = function () {
        return 'hik hik arrrh hik';
    };
    ;
    return DrunkPirate;
}());
var bramTheDrunkPirate = new DrunkPirate();
showInBrowser("Bram the drunk pirate says: \"" + bramTheDrunkPirate.sayArrr() + "\"");
// But we also can create an instance on the fly from a js object
// This comes in very handy for passing configuration objects as an argument. Or for making REST results typeSafe.
var nielsTheSoberPirate = {
    parrot: false,
    bottlesOfRumInBelly: 0,
    sayArrr: function () {
        return 'arrrh!!!';
    }
};
showInBrowser("Niels the sober pirate says: \"" + nielsTheSoberPirate.sayArrr() + "\"");
// If we look the generated code we can't find the Pirate interface.
// This is because interfaces only exist at compile time and can't be translated to js.
// This has the downside that the next only works with classes.
var isBramADrunkenPirate = bramTheDrunkPirate instanceof DrunkPirate;
var isNielsADrunkenPirate = nielsTheSoberPirate instanceof DrunkPirate;
showInBrowser("Are these pirates drunk? bram: " + isBramADrunkenPirate + " niels: " + isNielsADrunkenPirate);
var steven;
// We have created a variable that can hold a rumDrinking person named steven
// we can now asign it like above:
steven = { name: 'steven', bottlesOfRumInBelly: 5 };
showInBrowser("This is steven the rum drinking person: " + JSON.stringify(steven));
// But we can also do the following
steven = new DrunkPirate();
showInBrowser("This is drunk pirate as a rum drinking person: " + JSON.stringify(steven));
// Note that there is no link between DrunkPirate/Pirate and RumDrinkingPerson.
// But we can still assing our DrunkPirate because it has all the needed fields of a RumDrinkingPerson
// This is the so called duck typing.
// Note that the next line won't compile because niels is a only a Pirate.
// The name property of a pirate is optional but it's required for a RumDrinkingPerson
// steven = nielsTheSoberPirate;
//Utility functions used in example
function showInBrowser(line) {
    document.getElementById('interfaces').innerHTML += line + " </br>";
}
