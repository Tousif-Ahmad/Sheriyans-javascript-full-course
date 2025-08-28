// q1. 
const person = {
    name : "ali",
    age : 20,
    isEnrolled : true,
}
// console.log(person);

// q2. Can an object key be a number or boolean ? try this.
const obj = {
    true : "yes",
    43 : "answer",
}
// console.log(obj[43]);

// q3. 
// const user = {
//     "first-name" : "Asif",

// }
// console.log(user["first-name"]);

// q4.
let key = "age";
const user = {
    "first-name" : "Asif",
    ["key"] : "16",
}
// console.log(user.key);

// q6. 
// const locations = {
//     city : "Peshawar",
//     coordinates : {
//         lat : 23.4,
//         lng : 45.3,
//     },
// };
// console.log(locations.coordinate.lat);
// console.log(locations?.coordinate?.lng);


// q7.  DESTRUCTURE CITY AND LATITUDE 
// const locations = {
//     city : "Peshawar",
//     coordinates : {
//         lat : 23.4,
//         lng : 45.3,
//     },
// };
// let {city} = locations;
// let {lat} = locations.coordinates;
// console.log(city, lat);

// q8. use for in to log all keys in this object 
const course = {
    title : "javascript",
    duration : "4 weeks",
}
// for (const key in course) {
//     console.log(key);
// }

Object.entries(course).forEach(function(val){
    console.log(`${val[0]}: ${val[1]}`);
    // console.log(val);
})