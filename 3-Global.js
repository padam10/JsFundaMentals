// global is an object, which contains everything
// that isn't scoped.

for (prop in global) {
  console.log(prop);
}
console.log('--------------------------------------');

console.log(prop);
var myName = 'Tim Rayburn';

console.log('--------------------------------------');

for (prop in global) {
  console.log(prop);
}

console.log('--------------------------------------');

console.log(prop);
