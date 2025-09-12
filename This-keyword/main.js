// THIS KEYWORD => special keyword he q k jaise 
// baaqi saare keyword ki value ya unka 
// nature same rhta he this ki value ya nature 
// badl jaata he is baat se ke ap ouse kaha use kar rehe ho.

// global scope 
// window he prime minister means supreme
// console.log(this);  /* global scope me this ki value window hotii he  */

// function me 
// function heyy(){
//     console.log(this);
// }
// heyy()

// method  me 
/* method ke andr this value apka object hota he */
// let obj = {
//     name : "ali",
//     sayName : function(){
//         console.log(this.name);
//     }
// }
// obj.sayName()


// event handler me 
// this woh hota he jis pe hamesha add event listener laga ho.
// document.querySelector("h1").addEventListener("click", function(){
//     console.log(this.style.color = "red");
// })


// class me 
// class ke andr this value ek blank object hotii he jab ap use new keyword ke sath cal krte ho.
// class Abcd{
//     constructor(){
//         console.log("hehe");
//         this.a = 12
//     }
// }
// let val = new Abcd();   /* ye new ek blank object bnata he */
// console.log(val);

// this ki value
// ---------------------------------------------------

// global - window 
// function - window 
// method with es 5 function - object
// method with es 6 arrow function - window 
// es 5 function inside es 5 method - window 
// arrow function inside es 5 method - object 
// event handler - element 
// class - blank object 


// MANUAL BINDING (call, apply, bind)
// function ko krte waqt aap set kar skte ho ki uskii THIS ki value kya hogiii.

// let obj ={
//     name : "ali",
//     age :23,
// }

// function sayName(a,b,c){
//     console.log(this, a,b,c);
// }
// sayName.call(obj, 1,2,3)

// apply me ap sirf 2 parameter bhej skte ho ek hota he apka object aur doosre array

// sayName.apply(obj, [1,2,3])

// BIND => ye ek naya function deta he 
// let fnc = sayName.bind(obj, 1,2,3)
// fnc()