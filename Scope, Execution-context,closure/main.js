// SCOPE => FUNCTIONAL SCOPE, BLOCK, AND GLOBAL SCOPE 

// FUNCTIONAL SCOPE => function ke andar he use ho sktii he.
// GLOBAL SCOPE => poore code kahin bhii use ho skti he .
// BLOCK SCOPE => {} curly braces me he use ho sktii he .

// EXECUTION CONTEXT => MEMORY CREATION AND CODE EXECUTION PHASE.

// EXECUTION CONTEXT => js sab se pehle jaise he apka function dekhta he sabse pehle 
// js banaata he execution context ye ek process he to 2 differnet phases me chlta he ek ka nam he 
// memory phase aur doosre ka nam he execution phase.

// function abcd(){
//     let a = 10;
//     let b = 20;
//     let c = 30;

//     // ....
//     // ...
// }

// LEXICAL SCOPE AND DYNAMIC SCOPE 
// lexical scoping => ki ap kahan par physically available ho ye poori tareeke se depend 
// krta he kii ap kya access kar paoge.
// function abcd(){
//     let a = 10;
//     function efg(){
//         console.log(a);
//     }
//     efg()
// }
// abcd()

// CLOSURE => function jo return kare ek aur function aur return hone wlaa function yaad 
// rakhega parent function ke varaibles.

// counter example 
// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// let fnc = counter();
// fnc();
// fnc();
// fnc();

// let fnc2 = counter();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();

//  encapsulation => 

// function clickLimiter(){
//     let click = 0;
//     return function(){
//         if (click < 5){
//             click++;
//             console.log(`Clicked : ${click} times`);
//         }
//         else{
//             console.error(`LIMIT Exceeded, try after some time`);
//         }
//     }
// }
// let fnc = clickLimiter();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();


// THIS KEYWORD 
// THIS => ek special keyword he , q k jaise ke baqii saare keywords ki value ya nature same 
// rehta he this ki value ka nature badal jaata he is baat se ke ap use kahan use kar rehe ho.

// global scope me this ki value 
// console.log(this);  /* window */

// function ke andar bhi window hotii he.
// function abcd(){
//     console.log(this);
// }
// abcd();

// method me 
// let obj = {
    // name : "sam",
    // sayName : function(){
    //     console.log(this);
    // }
    // sayName: ()=>{
    //     console.log(this);
    // }
// }
// obj.sayName();

// event handler me 
// document.querySelector("h1").addEventListener("click", function(){
//     console.log(this.style.backgroundColor = "red");
    
// })

// class ke andr this ki value ek blank object ban jatii he 
// class Abcd{
//     constructor(){
//         console.log("heyy");
//         this.a = 10;
//     }
// }
// let val = new Abcd();

// THIS KI VALUE 
// ---------------------------
// GLOBAL => WINDOW 
// FUNCTION => WINDOW
// METHOD WITH ES5 FNC => OBJECT
// ES5 FNC INSIDE ES5 METHOD => WINDOW 
// ARROW FUNCTION INSIDE ES5 METHOD => OBJECT
// EVENT HANDLER => ELEMENT
// CLASS => BLANK OBJECT 

// CALL, APPLY BIND 
// function ko call krte waqt aap set kar skte ho ki uski this ki value kya hogii.

// let obj = {
//     name : "ali",
// }

// function abcd(a,b,c){
//     console.log(this.name,a,b,c);
// }
// abcd.call(obj, 1,2,3) /* call */
// abcd.apply(obj, [1,2,3]) /* apply */
// let fnc = abcd.bind(obj, 1,2,3); /* it create a duplicate function */
// fnc();


// const person1 = {
//   name: "Tousif",
//   introduce: function (city) {
//     console.log(`Hi, I am ${this.name} from ${city}`);
//   }
// };

// const person2 = { name: "Ahmad" };

// Borrowing method using call
// person1.introduce.call(person2, "Lahore");
// person1.introduce.call(person2, "Lahore")
// Output: Hi, I am Ahmad from Lahore.
