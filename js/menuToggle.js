// shorten the menu when the screen is minimized
function myFunction() {
    const menu = document.getElementById("myMenu");

    if(menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// dropdown-blog-button
const blogBtn = document.getElementById('blog');
const blogDropdownContent = document.querySelector('.blog-dropdown-content');

blogBtn.addEventListener('click', () => {
    blogDropdownContent.style.display = 'block';
});

blogBtn.addEventListener('mouseleave', () => {
    blogDropdownContent.style.display = 'none';
});

