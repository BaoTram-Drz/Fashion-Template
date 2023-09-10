// Slide change event
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// slide hover 
const hoverBanner = document.getElementById('banner');
const displayPrev = document.getElementById('pre-btn');
const displayNext = document.getElementById('next-btn');
const displayDot = document.getElementById('banner-dot');

let isHovered = false;

hoverBanner.addEventListener('mouseover', () => {
  isHovered = true;
  showControls(); 
});

hoverBanner.addEventListener('mouseout', () => {
  isHovered = false;
  hideControls();
});

function showControls() {
  if(isHovered) {
    displayPrev.style.opacity = '1';
    displayNext.style.opacity = '1'; 
    displayDot.style.opacity = '1';
  }
}

function hideControls() {
  if(!isHovered) {
    displayPrev.style.opacity = '0';
    displayNext.style.opacity = '0';
    displayDot.style.opacity = '0'; 
  }
}