//In this example we create a class
var Coordinate = (function () {
    function Coordinate(x, y) {
        this.x = x; //the usage of this to access fields is important
        this.y = y;
    }
    // The above constructor + fields can be replaced by next shorthand
    //constructor(private x: number, private y: number) {}
    Coordinate.prototype.distanceTo = function (otherCord) {
        return Math.sqrt(Math.pow(this.x - otherCord.x, 2) + Math.pow(this.y - otherCord.y, 2));
    };
    // toString is a special method like in java
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
    Coordinate.prototype.toString = function () {
        // we use backticks for template strings.
        // template strings can be multiline and have variables inside
        return "[" + this.x + ", " + this.y + "]";
    };
    return Coordinate;
}());
var c1 = new Coordinate(20, 15);
var c2 = new Coordinate(30, 20);
var distance = c1.distanceTo(c2);
document.getElementById('classes').innerHTML = "Distance between " + c1 + " and " + c2 + " is " + distance;
