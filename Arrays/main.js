// ARRAYS => ek single variable me ek se zyada values rkh skte ho different tyes ke.

// let marks = [10,20,30,40];
// access
// console.log(marks[0]);
// console.log(marks[10]);

// modify 
// marks[2] = 8;
// console.log(marks);

// ARRAY METHODS 
// let arr = [1,2,3,4];
// arr.push(5);
// arr.pop()
// arr.shift()
// arr.unshift(2)
// arr.splice(1,1,10)
// console.log(arr.slice(0,2));
// arr.reverse();
// console.log(arr);

// SORT METHOD 
// let numbers = [1,2,33,43,100,11];
// let nums = numbers.sort((a,b)=>{
//     // return a - b;   /* a - b return kya to ascending order me ayega */
//     return b - a;   /* b - a return kya to descending order me ayega */
// })
// console.log(nums);

// FOREACH 
// const nums = [2,34,5,6];
// nums.forEach((num)=>{
//     console.log(num);
    
// })

// MAP 
// const nums = [2,34,5,6];
// let res = nums.map(function(val){
//     if (val > 4){
//         return val;
//     }
// })
// console.log(res);

// FILTER 
// let arr = [1,2,3,4,5,6,7,8];
// let newArr = arr.filter(function(val){
//     if (val > 4){
//         return true;
//     }
// })
// console.log(newArr);

// REDUCE 
// let arr = [1,2,3,4,5];
// let sum = arr.reduce(function(accumulator, val){
//     return accumulator + val;
// }, 0)
// console.log(sum);

// FIND => return the first match if condition is true.
// let arr = [
//     {id : 1, key : 1},
//     {id : 1, key : 2},
//     {id : 1, key : 1},
// ]
// let ans = arr.find(function(val){
//     return val.key === 1;
// })
// console.log(ans);

// SOME => agar ek bhii true howa to return karega 
// let score = [20,30,40,60];
// let ans = score.some(function(val){
//     return val > 50;
// })
// console.log(ans);

// EVERY => agar saare true howe tabhii true Aayega wrna false.
// let score = [20,30,40,60];
// let result = score.every(function(val){
//     return val > 30;
// })
// console.log(result);


