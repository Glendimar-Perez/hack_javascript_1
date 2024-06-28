/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
const arr = ["foo", "bar", "baz", "qux", "echo"];
let result = 0;

for (const item of arr) {
   if (item[0] === "b") {
      result++;
   }
}

//export result
module.exports = result;