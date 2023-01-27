//get (indexOf)position
//and replace banana to mango
let fruit = ['apple', 'banana', 'orange'];
console.log(fruit)
let position =fruit.indexOf('banana');
console.log(position);
fruit[1]  ='mango';
console.log(fruit)

//remove orange
//and add water malon
fruit.pop();
console.log(fruit);
fruit.push('watermalon');
console.log(fruit);


// =================
//       output
//      -------------------


 /**
 * [ 'apple', 'banana', 'orange' ]
 *    1
 * [ 'apple', 'mango', 'orange' ]
 * [ 'apple', 'mango' ]
 * [ 'apple', 'mango', 'watermalon' ]
 */

