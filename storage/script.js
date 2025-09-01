// LOCAL STORAGE => apke browser ke andr data store krna jo ke browser bnd hone par 
// bhii data delete nhii hoga.

// SESSION STORAGE => ye apka data temporarily store krta he mtlb tab bnd howa data gaya.

// COOKIES => ye bhi data store krta he and apka data browser ke cookies nam ki property me save 
// hota he and ye cookie concept kam data ya light data ke liye hota he.

// window.matchMedia('(prefers-color-scheme: dark)');

// function setDarkOrLight(){
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches){
//         document.body.classList.add("dark");
//         document.body.classList.remove("light")
//     }
//     else{
//         document.body.classList.add("light");
//         document.body.classList.remove("dark");
//     }
// }
// setDarkOrLight();

// window.matchMedia("(prefers-color-scheme: dark)")
// .addEventListener("change", function(){
//     setDarkOrLight();
// })
if (localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"));

}
let btn = document.querySelector("#toggle-theme");
btn.addEventListener("click", function(){
    if (document.body.classList.contains("light")){
        document.body.classList.remove("light");
        document.body.classList.add("dark");

        localStorage.setItem("theme", "dark")
    }
    else{
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme", "light")
    }
})