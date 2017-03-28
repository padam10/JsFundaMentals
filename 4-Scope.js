// if we access a variable that does not exist,
// then we get an Error.

// console.log(somethingRandom);

// but is we access something which does exist
// we get an expected response.

// var name = 'Tim Rayburn';
// console.log(name);

// So let's play a game ... ERROR OR NOT?!



// var arr = [1,2,3];
// for(index in arr) {
//   var foo = arr[index];
// }
// console.log(foo);

// var arr = [1,2,3];
// arr.map(function(value) {
//   var foo = value;
// })
// console.log(foo);


function x() {
  var myName = 'Tim Rayburn';
  y();
  function y() {
    var myOtherName = 'Timothy J. Rayburn';
    console.log(myName);
  }
  //console.log(myOtherName);
}

x();
