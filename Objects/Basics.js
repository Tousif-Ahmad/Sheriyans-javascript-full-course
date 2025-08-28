// OBJECTS => key value pairs.
// const obj = {
//     name : "ali",
//     age : 20,
//     khaana : "Daal Chawal"
// }
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj["khaana"]);

// let aa = "name";
// console.log(obj[aa]);


// NESTING 
const user = {
    name : "ali",
    address : {
        city : "chitral",
        pinCode : 2345,
        locations : {
            lat : 23.4,
            lng : 77.5,
        },
    },
};
// console.log(user.address.locations.lat);

// OBJECT DESTRUCTURING 
// const {lat, lng} = user.address.locations;
// console.log(lat, lng);


// LOOPING OBJECTS 
// for-in,  object.keys(),   object.entries,  object.values()

// FOR IN LOOP
// const obj = {
//     name : "ali",
//     age : 20,
//     email : "ali@gmail.com"
// }
// for (const key in obj) {
//     console.log(key, obj[key]);
// }

// OBJECT.KEYS()
const obj = {
    name : "ali",
    age : 20,
    email : "ali@gmail.com"
}
// let newObj = Object.keys(obj);
// console.log(newObj);

// OBJECT.VALUES()
// const newObj = Object.values(obj);
// console.log(newObj);

// OBJECT.ENTRIES()
// const newObj = Object.entries(obj);
// console.log(newObj);