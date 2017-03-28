function Person() {
  this.firstName = "Tim";
  this.lastName = "Rayburn";
}
var p = new Person()
console.log(p);
console.log(Person.prototype);

// Person.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }

// Person.prototype.fullName = () => {
//   return this.firstName + " " + this.lastName;
// }

console.log(p);
console.log(Person.prototype);

console.log(p.fullName());
