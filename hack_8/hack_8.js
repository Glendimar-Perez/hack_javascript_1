/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
for (let i = 0; i < arr.length; i++) {
   if (i > 0 && i < 4) {
      let temp = i === 3 ? arr[i].toUpperCase() : arr[i].replace("a", "@");
      result.push(temp);
   }
}
//export result
module.exports = result;