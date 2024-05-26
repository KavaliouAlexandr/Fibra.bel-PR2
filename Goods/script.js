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

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}
