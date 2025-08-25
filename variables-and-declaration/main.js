// VAR , LET, CONST 

// 1. VAR 
var userName;  /* declaration krna */ 
var userName = "tousif"; /* declaration and initialization krna  */
// 1. jab hum var se variable  bnate hain to woh window me add hota he .
// 2. function scoped hota he.
// 3. dobara re declare kr skte hain error nhii ayega.

// 2. LET 
let age = 23;
age = 24;
// 1. window me add nhii hota.
// 2. block scoped hota he he 
// 3. re declare nhii kar skte.
// 4. re initialize kr skte hain.

// 3. CONST 
// const pi = 3.14;
// pi = 2.34;
// 1. window me add nhii hota.
// 2. block scoped hota he he 
// 3. re declare nhii kar skte.
// 4. re initialize bhii nhii kr skte hain.

// SCOPES => GLOBAL, FUNCTION,  BLOCK 
// global => apne poore code kahi bhii access kr skte ho.
// function => sirf function ke andar he acces kr skte hain.
// block => ek block ke andar he access kr skte hain e.g if, for.


// TEMPORAL DEAD ZONE 
// tdz => utna area jitne me js ko pta to he ke variable exist krta hee par woh apko value nhii de skta.
// console.log(a);
// let a = 12;

// console.log(x);
// var x = 10;


// HOISTING => EK VARIABLE ko jab js me bnate hain to woh variable do hisso me toot 
// jaata he and uska declare part upar chala jaata he and uska initialization part neeche reh jaata he.

var a = undefined;
console.log(a);
a = 10;

