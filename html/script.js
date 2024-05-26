let lastScrollTop = 0;
const navbar = document.querySelector(".header");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Прокрутка вниз
        navbar.style.top = "-80px"; // Плавно выезжаем наверх
    } else {
        // Прокрутка вверх
        navbar.style.top = "0"; // Плавно возвращаем навбар на место
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для поддержки Safari
}, false);


document.querySelector(".contact-form").addEventListener("submit", function(event) {
    
    this.reset();
});

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

const CryptoJS = require('crypto-js');

// Ваш токен от Web3Forms
const token = "f82c6329-b6b3-40be-8c6b-087136429e11";

// Ключ для шифрования (может быть любая строка)
const encryptionKey = "strong_random_key_here";

// Шифруем токен с использованием AES
const encryptedToken = CryptoJS.AES.encrypt(token, encryptionKey).toString();

// Теперь вы можете отправить encryptedToken на сервер


