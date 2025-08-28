// q1.
// const fruits = ["Apple", "orange", "Banana"];
// console.log(fruits[1]);

// q2.
// const fruits = ["Apple", "orange", "Banana"];
// fruits.push("Mango");
// fruits.unshift("Pineapple");
// console.log(fruits);

// q3. 
// const fruits = ["Apple", "Banana"];
// fruits.splice(1,1,"Kiwi");
// console.log(fruits);

// q4.
// const colors = ["Green", "Yellow"];
// colors.splice(1,0,"red", "blue");
// console.log(colors);

// q5. 
// const items = [1,2,3,4,5,6];
// const newItems = items.slice(2,4);
// console.log(newItems);

// q6. 
// const names = ["zara", "ali", "mira", "bashir"];
// names.sort();
// names.reverse();
// console.log(names);

// q7.
// let numbers = [2,3,4,5];
// const square = numbers.map((n)=>{
//     return n ** n;
// })
// console.log(square);

// q8.
// const arr = [5, 12, 8, 20, 3];
// const result = arr.filter(function(val){
//     return val > 10
// })
// console.log(result);

// q9. 
// const marks = [20,30,40,33,45];
// const sum = marks.reduce(function(acc, val){
//     return acc + val;
// }, 0)
// console.log(sum);

// q10.
// const nums = [2,3,4,6,11,12,32];
// const ans = nums.find((val)=>{
//     return val < 10
// })
// console.log(ans);

// q11. 
// const score = [45, 70, 4, 93, 87];
// const result = score.some((val)=>{
//     return val < 35;
// })
// console.log(result);

// q12.
// const nums = [2,8,6,8,12];
// const evnNums = nums.every((num)=>{
//     return num % 2 === 0;
// })
// console.log(evnNums);

// q13. Destructure this array to get the first and lastname 
// const fullName = ["Tousif", "Ahmad"];
// const [firstName, lastName] = fullName;
// console.log(firstName, lastName);

// q14. Merge two arrays using spread operator.
const a = [1,2];
const b =[3,4];
const c = [...a, ...b];
console.log(c);
