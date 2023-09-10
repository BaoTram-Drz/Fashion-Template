// open history in side bar
const historyBtn = document.getElementById('history-btn');
const historyContainer = document.querySelector('.recently-container');

let isHistoryVisible = false; 

historyBtn.addEventListener('click', () => {
    isHistoryVisible = !isHistoryVisible;

    if (isHistoryVisible) {
        historyContainer.style.opacity = '1';
    } else {
        historyContainer.style.opacity = '0';
    }
});

//================================================================
// open social in side bar
const shareBtn = document.getElementById('share-btn');
const socialContainer = document.querySelector('.social-container');

let isSocialVisible = false; 

shareBtn.addEventListener('click', () => {
    isSocialVisible = !isSocialVisible;

    if (isSocialVisible) {
      socialContainer.style.opacity = '1';
  } else {
      socialContainer.style.opacity = '0';
    }
});
// hover in history
const letterBtn = document.getElementById('social-letter-button');
const letterContent = document.querySelector('.social-letter-hover');

letterBtn.addEventListener('mouseover', () => {
    letterContent.style.display = 'block';
});

letterBtn.addEventListener('mouseleave', () => {
    letterContent.style.display = 'none';
});
//================================================================
// slide effect in recently in side bar ( display 3 image)
const recentlyGroup = document.querySelector('.recently-viewed-group');

const recentlyImages = recentlyGroup.querySelectorAll('.recently-image');

const itemBlock = 3; 

let currentItem = 0;

function showImages(index) {

    recentlyImages.forEach(img => img.style.display = 'none');

    for(let i = index; i < index + itemBlock; i++) {
        if(recentlyImages[i]) {
            recentlyImages[i].style.display = 'block';
        }
    }
}

showImages(currentItem); 

function slideTop() {
  if(currentItem <= 0) {
    return;
  }
  currentItem--;
  showImages(currentItem);
}

function slideBottom() {
  if(currentItem + itemBlock >= recentlyImages.length) {
    return;
  }
  currentItem++;  
  showImages(currentItem); 
}

document.getElementById('recently-top').addEventListener('click', slideTop);
document.getElementById('recently-bottom').addEventListener('click', slideBottom);


// hover image 2 to display letter
const imageDiv = document.getElementById('image-2');
const hoverImage = document.querySelector('.recently-image-hover');

imageDiv.addEventListener('mouseover', () => {
  hoverImage.style.display = 'block';
});

imageDiv.addEventListener('mouseleave', () => {
  hoverImage.style.display = 'none';
});

//================================================================
// open recently in side bar
const topBtn = document.getElementById('top-recently');
const recentlyViewedContainer = document.querySelector('.top-recently-container');

let isRecentlyViewedVisible = false; 

topBtn.addEventListener('click', () => {
    isRecentlyViewedVisible = !isRecentlyViewedVisible;

    if (isRecentlyViewedVisible) {
        recentlyViewedContainer.style.opacity = '1';
    } else {
        recentlyViewedContainer.style.opacity = '0';
    }
});
//// slide effect in top-recently in side bar ( display 3 image)
const topRecentlyGroup = document.querySelector('.top-recently-viewed-group');

const topRecentlyImages = topRecentlyGroup.querySelectorAll('.top-recently-image');

const itemTopBlock = 2; 

let topCurrentItem = 0;

function showTopImages(index) {

  topRecentlyImages.forEach(img => img.style.display = 'none');

    for(let i = index; i < index + itemTopBlock; i++) {
        if(topRecentlyImages[i]) {
          topRecentlyImages[i].style.display = 'block';
        }
    }
}

showTopImages(topCurrentItem); 

function slideTopTop() {
  if(topCurrentItem <= 0) {
    return;
  }
  topCurrentItem--;
  showTopImages(topCurrentItem);
}

function slideTopBottom() {
  if(topCurrentItem + itemTopBlock >= topRecentlyImages.length) {
    return;
  }
  topCurrentItem++;  
  showTopImages(topCurrentItem); 
}

document.getElementById('top-recently-top').addEventListener('click', slideTopTop);
document.getElementById('top-recently-bottom').addEventListener('click', slideTopBottom);


//=====hover image 1 to display item
const imagetDiv = document.getElementById('imaget-1');
const hovertImage = document.querySelector('.top-recently-image-hover');

imagetDiv.addEventListener('mouseover', () => {
  hovertImage.style.display = 'block';
});

imagetDiv.addEventListener('mouseleave', () => {
  hovertImage.style.display = 'none';
});
