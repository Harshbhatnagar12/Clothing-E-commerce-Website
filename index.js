
let heroSection = document.querySelector(".herosection");
let shops = document.querySelector(".shops");
let girlsShops = document.querySelector(".girls-shops");
let body = document.querySelector("body");
let shopsBtn = document.querySelectorAll(".shops-btn");
let blogs = document.querySelector(".blogs")


let shopsData = [
    { selector:".shop-box-1", image:"shirt1.png", price:"$14"},
    { selector:".shop-box-2", image:"image2.png", price:"$11"},
    { selector:".shop-box-3", image:"image3.png", price:"$10"},
    { selector:".shop-box-4", image:"image4.png", price:"$19"},
    { selector:".shop-box-5", image:"image5.png", price:"$12"},
    { selector:".shop-box-6", image:"image6.png", price:"$112"},
    
];

let footer = document.querySelector(".footer"); 

function handleClick(imageUrl,price){

    heroSection.style.display = "none";
    shops.style.display = "none";
    girlsShops.style.display="none";
    blogs.style.display="none";
    footer.style.display="none";
    
    // Main div
    
    let mainDiv = document.createElement("div");
    body.appendChild(mainDiv);
    mainDiv.style.height = "550px";
    mainDiv.style.width = "100%";
    mainDiv.style.marginTop = "100px";
    mainDiv.style.display = "flex";
    
    // Maindiv under Div-1
    
    let divLeft = document.createElement("div");
    mainDiv.appendChild(divLeft);
    divLeft.style.height = "550px";
    divLeft.style.width = "50%";
    
    
    
    // divLeft Image styling 
    
    let divLeftImage = document.createElement("div");
    divLeft.appendChild(divLeftImage);
    divLeftImage.style.height = "390px";
    divLeftImage.style.width = "450px";
    divLeftImage.style.backgroundColor = "grey";
    divLeftImage.style.marginTop = "30px"
    divLeftImage.style.backgroundImage=`url('${imageUrl}')`
    divLeftImage.style.backgroundSize  = "cover";
    divLeftImage.style.position = "fixed";
    divLeftImage.style.marginLeft = "100px"
    divLeftImage.style.borderRadius = "20px";
    
    
    
    //Maindiv under Div-2
    
    let divRight = document.createElement("div");
    mainDiv.appendChild(divRight);
    divRight.style.height = "500px"
    divRight.style.width = "50%";
    
    let divRightText = document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height = "390px"
    divRightText.style.width = "450px"
    divRightText.style.marginTop = "20px";
    divRightText.style.position = "fixed";
    let h1 = document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText = "Shoply Offer : Trending Shop Now";
    h1.style.color = "white";
    h1.style.fontSize = "35px";
    h1.style.paddingTop = "10px";
    
    let h3 = document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText = "Special Price";
    h3.style.fontWeight = "400";
    h3.style.paddingTop  = "10px";
    h3.style.fontSize  = "25px";
    
    let h2 = document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText = `${price}`;
    h3.style.fontWeight = "400";
    h3.style.paddingTop  = "10px";
    h3.style.fontSize  = "25px";
    h3.style.paddingTop = "20px";
    
    let p = document.createElement("p");
    divRightText.appendChild(p);
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat, aliquid reiciendis quas similique ipsam autem tempor ratione illum incidunt inventore exercitationem."; 
    p.style.fontWeight = "300";
    p.style.paddingTop = "20px";
    
    
    let button = document.createElement("button");
    divRightText.appendChild(button);
    button.innerText = "Back";
    button.style.height = "50px";
    button.style.width = "150px";
    button.style.border = "none";
    button.style.backgroundColor = "sienna"
    button.style.marginTop = "40px";
    button.style.borderRadius = "20px";
    button.style.color = "white";
    button.style.fontSize = "20px";
    button.style.cursor = "pointer";
    
    let button2 = document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText = "Add to Cart";
    button2.style.height = "50px";
    button2.style.width = "150px";
    button2.style.border = "none";
    button2.style.backgroundColor = "sienna"
    button2.style.marginTop = "40px";
    button2.style.marginLeft = "20px";
    button2.style.borderRadius = "20px";
    button2.style.color = "white";
    button2.style.fontSize = "20px";
    button2.style.cursor = "pointer";
    
    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display = "block";
        girlsShops.style.display="block";
        blogs.style.display="block";
        footer.style.display= "block";
    })   
}


shopsData.forEach((shop=>{
    let shopsBox = document.querySelector(shop.selector);
    shopsBox.addEventListener("click",()=>handleClick(shop.image, shop.price))
}))


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelectorAll('a[href^="#"]').forEach(nav=>{
        nav.style.color="";
    })
    this.style.color="sienna";
    document.querySelector(this.getAttribute('href')).scrollIntoView
    ({
        behaviour:"smooth"
    })
})
})


let about = document.querySelector(".about");

about.addEventListener("click", function(){
    let aboutDiv = document.createElement("div");
    body.appendChild(aboutDiv)

    heroSection.style.display = "none";
    shops.style.display = "none";
    girlsShops.style.display="none";
    blogs.style.display="none";
    footer.style.display="none";
    aboutDiv.style.height="500px";
    aboutDiv.style.width="100%";
    aboutDiv.style.backgroundColor="black";
    aboutDiv.style.marginTop="100px";

    let aboutDivTop = document.createElement("div");
    aboutDiv.appendChild(aboutDivTop);
    aboutDivTop.style.height="300px";
    aboutDivTop.style.width="100%";
    aboutDivTop.style.backgroundColor="white";
    aboutDivTop.innerHTML=`<h1>#Know Us</h1>`;
    aboutDivTop.style.color = "black";
    aboutDivTop.style.fontSize="100px"; 
  
  


})





