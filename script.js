
let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");
let Cart = document.querySelector(".cart")

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
    about.style.display="none";
    Cart.style.display = "none";
    contact.style.display = "none";
    
document.getElementById("blog").style.color="white";
document.getElementById("home").style.color="rgb(2, 173, 173)";
document.getElementById("shop").style.color="white";
document.getElementById("contact").style.color="white";
document.getElementById("about").style.color="white"


}
function shops(){
mainPage.style.display="none";
blog.style.display="none";
about.style.display="none"
contact.style.display = "none";
Cart.style.display = "none";
card.style.display="block";
card2.style.display="block";

 
document.getElementById("blog").style.color="white";
document.getElementById("home").style.color="white";
document.getElementById("shop").style.color="rgb(2, 173, 173)";
document.getElementById("contact").style.color="white";
document.getElementById("about").style.color="white"


}

function blogs(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="block";
   about.style.display="none";
   contact.style.display = "none";
   Cart.style.display = "none";
    

document.getElementById("blog").style.color="rgb(2, 173, 173)";
document.getElementById("home").style.color="white";
document.getElementById("shop").style.color="white";
document.getElementById("contact").style.color="white";
document.getElementById("about").style.color="white"

}

function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   contact.style.display = "none";
   Cart.style.display = "none";
   about.style.display="block"

document.getElementById("blog").style.color="white";
document.getElementById("home").style.color="white";
document.getElementById("shop").style.color="white";
document.getElementById("contact").style.color="white";
document.getElementById("about").style.color="rgb(2, 173, 173)"

}

function contacts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   Cart.style.display = "none";
   contact.style.display="block"

document.getElementById("blog").style.color="white";
document.getElementById("home").style.color="white";
document.getElementById("shop").style.color="white";
document.getElementById("contact").style.color="white";
document.getElementById("about").style.color="white"
document.getElementById("contact").style.color="rgb(2, 173, 173)"

}

// cart

function show(img){
    let newImg = document.getElementById("newImg");
    // console.log(img);
    newImg.src=img.src;

    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="none"
    document.querySelector(".cart").style.display="flex"

};


function addCart(){
    alert("Added To Cart");
    location.reload()
}

// Navbar

document.addEventListener("DOMContentLoaded", function () {
    const checkBtn = document.getElementById("check-btn");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-link");

    checkBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });;
})
