class CreatePencil{
    constructor(name, company, price, color){
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }

    erase(){
        document.body.querySelectorAll("h1").forEach((elem)=>{
            // console.log(elem);
            if (elem.style.color === this.color){
                elem.remove();
            }
        })
    }
}

let p1 = new CreatePencil("natraj", "natraj", 10, "aqua");
let p2 = new CreatePencil("doms", "doms", 20, "green");

// extends and super 
// classical inheritance and prototypical inheritance 
// 