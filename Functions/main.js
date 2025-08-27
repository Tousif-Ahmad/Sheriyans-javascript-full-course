// what why how 
// what function 
// agar code likh diya to woh fooran chal jaata he aur 
// hum aisa nhii chahte to function use krte hain.

// 1. FUNCTION DECLARATION 
// function hny(){
//     console.log("Happy New Year");
// }
// hny();

// 2.  FUNCTION EXPRESSION 
// let fnc = function(){
//     console.log("hello");
// }
// fnc()

// 3. FAT ARROW FUNCTION 
// let sayHi = ()=>{
//     console.log("Hiii");
// }
// sayHi()

// 4. PARAMETERS AND ARGUMENTS 
// function dance(val){  /* this is parameter (1 se zyada bhi values de skte hain) */
//     console.log(`${val} naach rha he `);
// }
// dance("X") /* this is argument */
// dance("Y")

// function add(val1, val2){
//     console.log(val1 + val2);
// }
// add(10,20)
// add(1,2)


// DEFAULT, REST AND SPREAD PARAMETER 

// 1. DEFAULT VALUE 
// function add(v1, v2){
//     console.log(v1, v2);
// }
// add()

// function add(v1, v2){
//     console.log(v1 + v2);
// }
// add()

// function add(v1 = 1, v2 = 0){
//     console.log(v1 + v2);
// }
// add()

// 2. REST OPERATOR => jab arguments kai saare ho to utne he parameter banane padenge , is se bachney ke liye
// hum rest ka use krte hain ... function ke parameter space me lage to woh rest operator he. 
// function abcd(...val){
//     console.log(val);
// }
// abcd(1,2,3,4,5,6,7);

// 3. RETURN AND EARLY RETURN 
// return mtlb jahan se Aaye ho  wohi dal denge.

// function num(val){
//     return 8 + val;
// }
// let result = num(8)
// console.log(result);

// 4. FIRST CLASS FUNCTION => functions ko values ki tarah treat kr skte ho e.g variable me store kr skte ho.
// let sayHi = function(){
//     console.log("Hiii");
// } 
// sayHi()

// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("heyy");
// })

// 5. HIGHER ORDER FUNCTIONS => woh function jo kii return kare ek function ya phir accept kare ek function 
// apne argument me.

// e.g 
// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("Higher order function");
// })

// function abcd(){
//     return function(){
//         console.log("higher order function that return another ");
//     };
// }
// abcd()();

// 6. PURE AND IMPURE FUNCTION 
// aisa function jo bahar ki value ko na badle woh hai pure function.
// let a = 8;
// function sayHi(){
//     console.log("Hii");
// }
// sayHi();
// aisa function jo bahar ki value ko badle woh hai impure function.
// function increment(){
//     a++;
//     console.log(a);
// }
// increment();
