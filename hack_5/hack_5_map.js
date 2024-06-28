/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let numbers = [7,6,5,4,3,2,1];
let result = [];
numbers.map(function(num) {
   if(num % 2 === 1){
      result.push(num)
   }
});

//export result
module.exports = result;