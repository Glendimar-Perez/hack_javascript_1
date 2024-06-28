/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
for (let i = 0; i < arr.length; i++) {
   let initial = arr[i][0];
   let word = arr[i].slice(1);
   result.push(initial.toUpperCase() + word);
}

//export result
module.exports = result;