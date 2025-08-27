// q1.
// greet();
// function greet(){
//     console.log("Hello");
// }

// // q2.
// let multiply = (num1, num2)=>{
//     return num1 * num2;
// }
// console.log(multiply(2,3));

// q3.
// function welcome(name){
//     console.log(name);
// }
// welcome("Tousif");

// q4.
// function sayHi(name = "Guest"){
//     console.log(`Hii ${name}`);
// }
// sayHi()

// q5.
// function abcd(a,b,c,...val){
//     console.log(a,b,c,val);
// }
// abcd(1,2,3,4,5)

// q6. 
// function getScore(...score){
//     let total = 0;
//     score.forEach(function(val){
//         total = total + val;
//     })
//     return total;
// }
// console.log(getScore(10,20,30,40));

// q7. 
// function checkAge(age){
//     if (age < 18) return "Too Young";
//     return "Allowed"
// }
// console.log(checkAge(13));

// q8.
// function f(){
//     return;
// }
// console.log(f());

// q9.
// function parent(val){
//     val()
// }
// parent(function(){
//     console.log("heyheyeh");
// })

// q10. 
// let total = 0;
// function addTotal(num){
//     total = total + num;
//     console.log(total);
// }
// addTotal(10);

// q11. convert the above into pure function 
// let total = 0;
// function addTotal(num){
//     let newTotal = total;
//     newTotal = newTotal + num;
//     console.log(newTotal);
// }
// addTotal(10)

// q12.
// function parent(){
//     let x = 2;
//     return function(){
//         console.log(x);
//     }
// }
// parent()()

// q13. 
// function outer(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// const counter = outer();
// counter();
// counter();

// q14. 
// (function init(){
//     console.log("Initialized");
// })()

// BMI CALCULATOR 
// function bmi(weight, height){
//     return weight/(height * height);
// }
// console.log(bmi(64, 1.75).toFixed(2));

// DISCOUNT CALCULATOR 
// function discountCalculator(discount){
//     return function(price){
//         return price - price * (discount/100);
//     };
// }

// let ten = discountCalculator(10);
// let twenty = discountCalculator(20);
// console.log(ten(1200));
// console.log(twenty(1200));