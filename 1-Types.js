// create variables for the types

var testBoolean = true;
var testNumber = 123;
var testString = "Hello World!";
var testObject = { message: "Hello World!" };
var testNull = null;
var testUndefined = undefined;

var testFunction = (foo) => console.log(123);

console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testObject));
console.log(typeof(testNull));
console.log(typeof(testUndefined));
console.log(testObject.foobar);
console.log(global.foobar);

console.log(typeof(testFunction));
