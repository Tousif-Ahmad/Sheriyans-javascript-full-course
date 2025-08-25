// predict the output
console.log(null + 1); /* 1  because null is 0*/
console.log("5" + 3); /* 53 because 3 automatically convert to "3" */
console.log("5" - 3); /* 2  because  "5" automatically convert to number 5*/
console.log(true + false); /* 1 because true = 1, false = 0, 1 + 0 = 1 */

// Check types:
console.log(typeof []); /* Object */
console.log(
  typeof null
); /* it is object because of error/ bug in early days of js */
console.log(typeof 123n); /* BigInt */
console.log(typeof {}); /* object */

// Truthy or Falsy?
console.log(Boolean(0)); /* Falsy */
console.log(Boolean("0")); /* Truthy */
console.log(Boolean([])); /* Truthy */
console.log(Boolean(undefined)); /* Falsy */

// Compare with loose vs strict:
console.log(8 == "8");  /* true because == just check the numbers are equal   */
console.log(8 === "8"); /* false  because === check the numbers and data types as well */


