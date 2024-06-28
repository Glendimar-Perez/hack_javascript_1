/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let i = 0;
while(i < 8){
   if(i % 2 === 1){
      result.push(i);
   }
   i++
}

//export result
module.exports = result;