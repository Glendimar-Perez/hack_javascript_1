/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 *
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 *
 *
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]
 */
const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["foo", "bar", "baz", "qux", "echo"];
const result = [];
result.push(...numberArray, ...stringArray);

for (let i = 0; i < result.length; i++) {
  if (result[i] === 1) {
    result[i] = "one";
  } else if (result[i] === 3) {
    result[i] = "three";
  } else if (result[i] === 5) {
    result[i] = "five";
  }
}

for (let i = 0; i < result.length; i++) {
  if (typeof result[i] === "string") {
    switch (result[i]) {
      case "foo":
        result[i] = "f00";
        break;
      case "bar":
        result[i] = "Bar";
        break;
      case "baz":
        result[i] = "b@z";
        break;
      case "qux":
        result[i] = "quX";
        break;
      case "echo":
        result[i] = "3ch0";
        break;
    }
  }
}

result.unshift("h@ck");
result.splice(numberArray.length + 1, 0, "h@ck");
result.push("h@ck");

//export result
module.exports = result;
