let button = document.getElementById("subscribe-button");
let thankLink = document.getElementById("thank-you").href
button.addEventListener("click", () =>{
    window.open(thankLink)
    console.log("button clicked")
})

let name = document.forms["subscribe"]["name"].value;
let email = document.forms["subscribe"]["email"].value;
function validate(){

}