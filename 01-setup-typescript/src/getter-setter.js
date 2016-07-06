// lets take a look at an setter
// A nice use case is for lazy loading of object values like the example below
// Mos't of the time i use it to make values read only
var LazyObject = (function () {
    function LazyObject() {
    }
    Object.defineProperty(LazyObject.prototype, "value", {
        get: function () {
            if (!this._value) {
                this._value = new Array(90);
            }
            return this._value;
        },
        set: function (value) {
            if (value.length === 33) {
                logToDiv("yes we have 33 values");
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    LazyObject.prototype.logInnerValue = function () {
        logToDiv('inner value: ' + JSON.stringify(this._value));
    };
    return LazyObject;
}());
var lazyObject = new LazyObject();
lazyObject.logInnerValue();
logToDiv('value: ' + JSON.stringify(lazyObject.value));
lazyObject.logInnerValue();
lazyObject.value = [44, 33];
lazyObject.value = new Array(33);
//helper functions for this tutorial
function logToDiv(line) {
    document.getElementById('getter-setter').innerHTML += line + " </br>";
}
