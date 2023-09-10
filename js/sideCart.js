const sideCart = document.getElementById('side-cart');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartModal = document.querySelector('.side-cart-modal');
//open
sideCart.addEventListener('click', () => {
    cartModal.style.display = 'block';
})
//clode
closeCartBtn.addEventListener('click',() => {
    cartModal.style.display = 'none';
})
