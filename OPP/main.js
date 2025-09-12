// function createBiscuits(name, price, qty, company, category){
//     this.name = name;
//     this.price = price;
//     this.qty = qty;
//     this.company = company;
//     this.category = category;
// }
// let biscuit1 = new createBiscuits("oreo",20,8,"cadbury","chocolate");
// let biscuit2 = new createBiscuits("fantasy",40,5,"cadbury","chocolateFill");


// humain seekhna he factories banana, mtlb ke ap ek baar 
// blueprint bana do ke har object kaisa dekhega and hum log 
// naye objects with differnet values bana payenge hayii upar se pura kam he oop's me.

// function CreatePencil(name, price, color, company){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company;
//     this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.appendChild(h1);
//     }
// }
// let pencil1 = new CreatePencil("nataraj", 30, "black", "pencily");
// let pencil2 = new CreatePencil("nataraj", 30, "red", "pencily")

//  PROTOTYPE => agar hum chahte hain koi cheez har jaga same rehe.
function CreatePencil(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    // this.company = company;
    this.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.appendChild(h1);
    }
}

CreatePencil.prototype.company = "Sheryians";
let pencil1 = new CreatePencil("nataraj", 30, "black", "pencily");
let pencil2 = new CreatePencil("nataraj", 30, "red", "pencily")