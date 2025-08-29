// DOM MANIPULATION :
// 1. HTML SE ELEMENT SELECT KRNA.
// 2. TEXT BADLNA.
// 3. HTML BDLNA
// 4. CSS BDLNA
// 5. ATTRIBUTE BDLNA
// 6. EVENT LISTENERS

// 1. SELECTING ELEMENTS 
// const head = document.getElementById("head");
// console.log(head);

// const head = document.getElementsByClassName("head");
// console.log(head);

// const head = document.getElementsByTagName("h1");
// console.log(head);

// const head = document.querySelector("h1");
// console.log(head);

// const head = document.querySelectorAll("h1");
// console.log(head);


// 2. TEXT BADLNA 
// let head = document.querySelector("h1");
// head.textContent = "hello tousif kese ho";
// head.innerText = "hello tousif kese ho";
// head.innerHTML = "hello tousif kese ho";

// innerHTML => is se tag bhii use kr skte he.
// TextContent =>  style ko respect nhi krta jaise display hidden karo tab bhii show karega.
// innertext => style ko respect krta he jaise display none karo woh text nhii dikhta.

// 3. ATTRIBUTE MANIPULATION : getAttribute, setAttribute, removeAttribute,
// let a = document.querySelector("a");
// a.href = "https://www.google.com";

// a.setAttribute("href", "https://www.google.com")

// let img = document.querySelector("img");
// img.src = "https://media.istockphoto.com/id/2203626708/photo/beautiful-young-hispanic-woman-portrait.jpg?s=1024x1024&w=is&k=20&c=WOMkd-jmx6rcuDdjop_js6besidZjzZl1hOl7x2DmWs="
// img.setAttribute("src", "https://media.istockphoto.com/id/2203626708/photo/beautiful-young-hispanic-woman-portrait.jpg?s=1024x1024&w=is&k=20&c=WOMkd-jmx6rcuDdjop_js6besidZjzZl1hOl7x2DmWs=")

// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));
// a.removeAttribute("href");


// 3. DYNAMIC DOM MANIPULATION (CREATE ELEMENT, APPEND CHILD, REMOVE CHILD, PREPEND);
// let h1 = document.createElement("h1");
// h1.textContent = "hello g";
// document.body.append(h1)
// console.log(h1);

// 4. STYLING
// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "black"
// console.log(h1);

//  CLASSLIST (ADD, REMOVE, TOGGLE)
// let h1 = document.querySelector("h1");
// h1.classList.add("head")