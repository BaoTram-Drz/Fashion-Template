const signInBtn = document.getElementById('signin-btn');
const closeBtn = document.getElementById('close-login-btn');
const loginModal = document.querySelector('.login-modal');
// open
signInBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});
// clode
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

