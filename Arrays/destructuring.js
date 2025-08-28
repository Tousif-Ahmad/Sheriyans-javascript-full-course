// DESTRUCTURING AND SPREAD OPERATOR 

// DESTRUCTURING => array me se  values ko extract kr ke variable me dlna.
// let arr = [1,2,3,4,5];
// let [a,b, ,c] = arr;
// console.log(a, b, c);

// default values 
// let arr = [1,2,3,4,5];
// let [x,y = 10] = arr;
// console.log(x,y);

let colors = ["red", "green", "blue"];
let [first, , third] = colors;
console.log(first, third); // red blue


// SPREAD OPERATOR => Think of the spread operator as unpacking or spreading out elements
//  from an array or object.

// let arr = [1,2,3,4,6,7,8];
// let arr2 = [...arr];
// console.log(arr);
// console.log(arr2);


let fruits = ["apple", "mango"];
let moreFruits = ["banana", "orange"];
let allFruits = [...fruits, ...moreFruits];
console.log(allFruits); // ["apple", "mango", "banana", "orange"]


let numbers = [2, 3, 4];
let newNumbers = [1, ...numbers, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]
