// browser me page par koi bhi harkat karo event raise hoga.
// event mtlb kuch  actio howa.
// event listener ka mtlb he apne koi action ka reaction diya.

//  EVENT BINDING => addEventListener, removeEventListener
// let h1 = document.querySelector("h1");
// h1.addEventListener("click", function(){
//     h1.style.backgroundColor = "green";
// })

// let h1 = document.querySelector("h1");
// function dbl(){
//     h1.style.backgroundColor = "red";
// }
// h1.addEventListener("click", dbl);
// h1.removeEventListener("click", dbl)


//   COMMON EVENT TYPES 
//  INPUT=>
// let inp = document.querySelector("input");
// inp.addEventListener("input", function(e){
//     if (e.data !== null)
//     console.log(e.data);
// })

// CHANGE => change event tab chlta he jab apka koi input select ya textarea me change ho jayee.
// let select = document.querySelector("select");
// let h3 = document.querySelector("h3");

// select.addEventListener("change", function(e){
//     // console.log(e.target.value);
//     h3.textContent = `${e.target.value} Device Selected`;
// })

// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function(e){
//     if (e.key === " "){
//         h1.textContent = "SPC";
//     }
//     else{
//         h1.textContent = e.key;
//     }
    
// })


// let btn = document.querySelector("#btn");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function(){
//     inp.click();
// })
// inp.addEventListener("change", function(e){
//     // console.log(e.target.files[0].name);
//     const file = e.target.files[0];
//     if (file){
//         btn.textContent = file.name;
//     }
//     // btn.textContent = e.target.files[0].name;
// })

let form = document.querySelector("form");
const input = document.querySelectorAll("input");
const main = document.querySelector("#main");
form.addEventListener("submit", function(e){
    e.preventDefault();
    
    // create a card 
    let card = document.createElement("div");
    card.classList.add("card");

    // create a profile 
    let profile = document.createElement("div");
    profile.classList.add("profile");

    // create img 
    let img = document.createElement("img");
    img.setAttribute("src", input[0].value);

    // create h3
    let h3 = document.createElement("h3");
    h3.textContent = input[1].value;

    // create h5
    let h5 = document.createElement("h5");
    h5.textContent = input[2].value;

    // create p
    let p = document.createElement("p");
    p.textContent = input[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    main.appendChild(card)

    input.forEach(function(inp){
        if (inp.type !== "submit"){
            inp.value = ""
        }
    })
})