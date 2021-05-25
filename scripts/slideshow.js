let slideIndex = 1;
let myTimer;

showSlides(slideIndex);

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){nextSlides(1)}, 4000);
})

function nextSlides(n) {
    clearInterval(myTimer);
    if (n < 0){
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1){
        myTimer = setInterval(function(){nextSlides(n + 2)}, 4000);
    } else {
        myTimer = setInterval(function(){nextSlides(n + 1)}, 4000);
    }
}

function currentSlide(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){nextSlides(n + 1)}, 4000);
    showSlides(slideIndex = n)
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slideshow");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}