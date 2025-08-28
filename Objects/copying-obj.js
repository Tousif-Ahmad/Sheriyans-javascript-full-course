// COPYING OBJECTS : SPREAD,  OBJECT.ASSIGN, DEEP CLONE 

// SPREAD OPERATOR 
// const obj = {
//     name : "ali",
//     age : 22,
//     email : "test@gmail.com",

// };

// const obj2 = {...obj};
// console.log(obj);
// console.log(obj2);

// OBJECT.ASSIGN 
// let obj2 = Object.assign({}, obj);
// console.log(obj);
// console.log(obj2);

// DEEP CLONING 
// const obj = {
//     name : "ali",
//     age : 22,
//     email : "test@gmail.com",
//     address : {
//         city : "chitral",
//         pincode : 9876,
//     }

// };
// const obj2 = {...obj};
// obj.address.city = "peshawar",
// console.log(obj);
// console.log(obj2);

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj.address.city = "peshawar";
// console.log(obj);
// console.log(obj2);


// OPTIONAL CHAINING 
// const obj = {
//     name : "ali",
//     age : 22,
//     email : "test@gmail.com",
//     address : {
//         city : "chitral",
//         pincode : 9876,
//     }

// };
// console.log(obj?.address?.city);


// COMPUTED PROPERTIES 
let role = "Admin";
const obj = {
    name : "ali",
    age : 22,
    email : "test@gmail.com",
    [role] : "Ahmad",
    address : {
        city : "chitral",
        pincode : 9876,
    }

};
console.log(obj);