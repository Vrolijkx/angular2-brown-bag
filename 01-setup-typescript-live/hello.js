var Greeter = (function () {
    function Greeter(naam, address) {
        if (naam === void 0) { naam = "Bram"; }
        if (address === void 0) { address = 10; }
        this.naam = naam;
        this.address = address;
    }
    Greeter.prototype.sayHello = function () {
        // setInterval(() => {
        // 	document.body.innerHTML += `hello ${this.naam} from ${name}`;
        // }, 5000);
        var name = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            name[_i - 0] = arguments[_i];
        }
    };
    return Greeter;
}());
var greeter = new Greeter();
var a = [45, 89, 90, 7];
var b = a[0], d = a[2];
alert(d);
greeter.sayHello('jan', 'bram', 'Tom');
