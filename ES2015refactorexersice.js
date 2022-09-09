

//refactor this code to make it ES2015 standard

const arr = [1,2,3,4,5]
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

const double = arr => arr.map(val => val * 2)

//replace all functions with arrow functions

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }



const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0)
