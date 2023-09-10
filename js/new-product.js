//  display submit when click "Add to cart"
document.addEventListener('DOMContentLoaded', function() {
    setupProductEvent(1);
    setupProductEvent(2);
    setupProductEvent(3);
    setupProductEvent(4);

});
function setupProductEvent(productIndex) {
    const addBtn = document.getElementById(`addtocart-${productIndex}`);
    const closeSubBtn = document.getElementById(`close-sub-btn-${productIndex}`);
    const subDiv = document.querySelector(`.sub-${productIndex}`);
    const subEyeDiv = document.querySelector(`.sub-eye-${productIndex}`);

    addBtn.addEventListener('click', () => {
        subDiv.style.display = 'block';
        subEyeDiv.style.display = 'block';
    });

    closeSubBtn.addEventListener('click', () => {
        subDiv.style.display = 'none';
        subEyeDiv.style.display = 'none';
    });
}
