// navbar 연결됨


const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});


// "https://twitter.com/?lang=ko"

// "https://www.instagram.com/"

// "https://ko-kr.facebook.com/"