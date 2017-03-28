
function Person() {
  this.firstName = "Tim";
  this.lastName = "Rayburn";
}

// console.log(new Person());
//
//
//
// var obj = new Confusing();
// console.log(obj.fullName());
// console.log(obj);


// MOVE CODE HERE
// ----------------------------------------------

function Confusing() {
  console.log("Inside Confusing constructor");
  console.log(this);
  this.firstName = "Tim";
  this.lastName = "Rayburn";
  this.fullName = function() {
    console.log("Inside fullName method");
    console.log(this);
    this.testing = 123;
    this.result = this.firstName + " " + this.lastName;
    console.log(this);
    return this.result;
  }
}

// But did you know ....
var x = function (a,b) {
  this.result = a + b;
}
var y = (a,b) => {
  this.result = a + b;
  return this;
}
//
console.log(new x(1,2));
console.log( y(1,2));
