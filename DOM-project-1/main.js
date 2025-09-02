let users = [
    {
        name : "Aliya",
        pic : "https://i.pinimg.com/736x/ac/2c/5d/ac2c5d796b5cd865c4fb2ab6dfc64336.jpg",
        bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, fuga",
    },
    {
        name : "Husna",
        pic : "https://i.pinimg.com/736x/2c/f2/37/2cf237af056571e91a807bc67ffeb811.jpg",
        bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, fuga!"
    },
    {
        name : "Sam",
        pic : "https://i.pinimg.com/736x/0f/d9/c2/0fd9c2b8183569ffc5daebda29307d68.jpg",
        bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, fuga!",
    },
    {
        name : "Samreen",
        pic : "https://i.pinimg.com/1200x/65/c7/8a/65c78a4591e3e7dc19d4359139752dec.jpg",
        bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, fuga!",
    },
    {
        name : "Aina",
        pic : "https://i.pinimg.com/736x/b5/7a/4f/b57a4ff3f8d34959e9fd264b0b588c0a.jpg",
        bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, fuga!",
    },
    {
        name : "Sana",
        pic : "https://i.pinimg.com/736x/7d/25/30/7d2530ee58844b21a45ab26df200b154.jpg",
        bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, fuga!",
    },
]

// saare users show krna 
// filter krna har baar input krne par 
// phir show krna filtered users 

function showUsers(arr){
    arr.forEach(user => {
        // create outer card 
        const card = document.createElement("div");
        card.classList.add("card");

        // create image 
        const image = document.createElement("img");
        image.src = user.pic;
        image.classList.add("bg-img");

        // create blurred layer div
        const blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");

        // create content div 
        const content = document.createElement("div");
        content.classList.add("content");

        // creating h3 and paragraph 
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;

        // Append heading and paragraph to content
        content.appendChild(heading);
        content.appendChild(para);

        // Append all to card 
        card.appendChild(image);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Finally card to the parent or body
        // document.body.append(card);
        document.querySelector(".cards").append(card)


    });
}
showUsers(users)

let input = document.querySelector(".inp");
input.addEventListener("input", function(){
    let newUsers = users.filter(function(user){
        return user.name.toLowerCase().includes(input.value)
    })
    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers)
})