# Typescript setup

In this session we will start with creating a very basic typescript setup from scratch.
After that we will explore some Typescript and ES6 features that are not possible in ES5(current browser standard)


## basic setup

- install tsc globally with npm ```npm install typescript -g```
- setup up our typescript project with ```tsc --init``` it will create a default tsconfig.json
- create a ```src``` directory
- add the files under our ```src``` to our typescript sources in our ```tsconfig.json```
- add [setup-compiler.ts](src/setup-compiler.ts) to our source files.
- include the ```src/setup-compiler.js``` as a script in the [index.html](index.html) file.

When you did the above you will see that nothing will happen. This is because we still need to convert the ```.ts``` file to a ```.js``` file.
We can do this by calling ```tsc``` in the terminal from the directory with our ```tsconfig.json``` file. You will no see that next to you ```.ts``` file
 also a ```.js``` appears this is one we included in our browser as script.

If we don't want to keep calling the typescriptCompiler(tcs) everytime we change a file we can let typescript watch our source files. with
```tcs -w```


## Typescript/ES6 features

### classes(ES6)
A basic example of ES6 classes.
You can find the example [here](src/classes.ts).
Most of the code of the example is ES6 based but there are some typescript specific parts:

- The use of types like ```string```,```number``` on the propreties
- The access levels like ```public```,```private``` everyting is public in JS
- The compact assign to field constructor.

### interfaces(Typescript)
All you need to now to get started with interfaces you can find [here](src/interfaces.ts)

### Block scoping with let and const(ES6)
ES6 introduces the ```let``` and ```const``` keyword that make the current ```var``` redundant.
Variables declared with ```let``` and ```const``` are block scoped and not hoisted.
The demo of the let and const can be found [here](src/block-scope.ts)

### Destructering and the spread operator (ES6)
example [here](src/destructuring.ts)


##TODO

### for of loops (ES6)
Finally ES6 introduces a valid way to loop over the values of an array with the for of loop.
[This demo](src/for-of-loop.ts) shows how to use it

### getters setters and Arrow functions (ES6)
In java our getters and setters are just functions but ES6 defines a syntax to add logic to read/assignment to properties of a class.
[example](src/getter-setter.ts)

### What's possible with types (Typescript)
* types (any, object, multiple)
* enums
* multiple types with |

### debugging typscript code
set source maps in ```tsconfig.json``` to true and set a breakpoint in your ts file in chrome.
