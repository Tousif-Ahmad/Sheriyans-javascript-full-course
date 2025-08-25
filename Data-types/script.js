// DATA TYPES => data ka type e.g string, number etc

// 1. PRIMITIVE DATA TYPES => aisi saari values jinko copy krne par tumhe 
// real copy mile.
// string, number, boolean, undefined, null, symbol, BigInt.
let a = 8;
let b = a;
a = a + 2;

// 1. strings => '', "", ``
let userName = "ali";

// 2. Number 
let number = 8;

// 3. Boolean
let isLoggedIn = false;

// 4. Null => null ka mtlb he jaan boojh kar koi value nhii dii.
let selectedStudents = null;

// 5. undefined => apne ek variable bnaya use value nhii de to jo value by default mili woh undefined he.
let z;

// 6. symbol => unique immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");

// 7. BigInt => 
let maxNum = 83098497897863786372675n;



// 2. NON PRIMITIVE/ REFERENCE DATA TYPES => inko copy krne par real copy nhii milegii 
// but apko reference milega parent ka.
// Arrays, Functions, Objects
let arr = [1,2,3,4,5];
let arr2 = arr;
arr2.pop()


// DYNAMIC TYPING => js me static typing nhii yahn par dynamic typing typing he jiska mtlb he 
// ap data ko chnange kr skte ho Q k yahan par dynamic typing he.

let num = 12;
num = true;

// TYPEOF QUIRKS (e.g typeof null === object);
// console.log(typeof NaN);
// console.log(typeof 12);
// console.log(typeof null);
// console.log("" + "");


// TYPE COERCION => jima apka ek type automatically convert ho jayega.
// console.log("5" + 1);
// console.log("5" - 1);


//  TRUTHY AND FALSY VALUES 
// falsy values => null, undefined, 0, -0, "", false, document.all, NAN;
//  truthy values => all


