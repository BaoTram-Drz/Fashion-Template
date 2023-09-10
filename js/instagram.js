// image transition ( display with 5 image)
const insImageGroup = document.querySelector('.ins-image-group');

const insImages = insImageGroup.querySelectorAll('.ins-image');

const visibleCount = 5; 

let currentIndex = 0;

function showImages(index) {

  insImages.forEach(img => img.style.display = 'none');

  for(let i = index; i < index + visibleCount; i++) {
    if(insImages[i]) {
      insImages[i].style.display = 'block';
    }
  }
}

showImages(currentIndex); 

function slideLeft() {
  if(currentIndex <= 0) {
    return;
  }
  currentIndex--;
  showImages(currentIndex);
}

function slideRight() {
  if(currentIndex + visibleCount >= insImages.length) {
    return;
  }
  currentIndex++;  
  showImages(currentIndex); 
}

document.getElementById('ins-prev').addEventListener('click', slideLeft);
document.getElementById('ins-next').addEventListener('click', slideRight);