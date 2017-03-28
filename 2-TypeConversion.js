// We have types, but ... only kindof
// JavaScript really doesn't want you to have
// to think about a type system most of time.

var testString = "Improving";
var testNumber = 1997;
var testBoolean = true;
var testNull = null;
var testUndefined = undefined;
var testObject = {
  name: testString,
  founded : testNumber
};


// For the most part, the type system will
// coerce things to work, and for the most
// part those coercions are logical.

// For instance, if we are looking at Addition:

// console.log(testString + testNumber);
// console.log(testNumber + testString);
// console.log(typeof(testString + testNumber));
// console.log(typeof(testNumber + testString));

// console.log(testString + testBoolean);
// console.log(testBoolean + testString);
// console.log(typeof(testString + testBoolean));
// console.log(typeof(testBoolean + testString));

// console.log(testNumber + testBoolean);
// console.log(testBoolean + testNumber);
// console.log(typeof(testNumber + testBoolean));
// console.log(typeof(testBoolean + testNumber));

// But in other places, the results are ...
// less logical

// console.log(testString + testNull);
// console.log(testNull + testString);
// console.log(typeof(testString + testNull));
// console.log(typeof(testNull + testString));
//
// console.log(testString + testUndefined);
// console.log(testUndefined + testString);
// console.log(typeof(testString + testUndefined));
// console.log(typeof(testUndefined + testString));
//
// console.log(testNumber + testNull);
// console.log(testNull + testNumber);
// console.log(typeof(testNumber + testNull));
// console.log(typeof(testNull + testNumber));
//
// console.log(testBoolean + testUndefined);
// console.log(testUndefined + testBoolean);
// console.log(typeof(testBoolean + testNull));
// console.log(typeof(testNull + testBoolean));


// There are several values in JavaScript which
// are considered false by nature.  For instance:

if (0) { console.log('That is true') }
else { console.log('That is false') }

if ('') { console.log('That is true') }
else { console.log('That is false') }

if (null) { console.log('That is true') }
else { console.log('That is false') }

if (undefined) { console.log('That is true') }
else { console.log('That is false') }
