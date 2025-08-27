// LEXICAL SCOPING AND CLOSURE 

// CLOSURE => ek function jo return kare ek aur function aur return hone 
// wala function hamesha yaad rkhega parent function ka koi variable.

// function parent(){
//     let a = 8;
//     return function(){
//         console.log(a);
//     }
// }

//  LEXICAL SCOPING EXAMPLE 
// function parent(){
//     let a = 8;
//     function child(){
//         let b = 18;
//         function grandChild(){
//             let c = 28;

//         }
//     }
// }

//  IIFEs (IMMEDIATELY INVOKED FUNCTIONS)
// (function(){
//     console.log("IIFE");
// })();

//  HOISTING DIFFERENCES BETWEEN DECLARATION AND EXPRESSION 

// function statement / declaration
// abcd();
// function abcd(){
//     console.log("ABCD");
// }

// function expression
// abcd()
// let abcd = function(){
//     console.log("ABCD");
// }

// fat arrow function 
// abcd()
// let abcd = ()=>{
//     console.log("ABCD");
// }

