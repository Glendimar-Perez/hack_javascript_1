/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let numbers = [1,2,3,4,5,6,7];
let result = [];

//let result = numbers.filter(num => num % 2 !== 0);
numbers.map(function(num) {
   if(num % 2 === 1){
      result.push(num)
   }
});

//export result
module.exports = result;