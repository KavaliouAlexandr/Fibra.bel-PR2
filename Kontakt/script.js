let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Прокрутка вниз
        document.querySelector(".header").classList.add("hidden");
    } else {
        // Прокрутка вверх
        document.querySelector(".header").classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для поддержки Safari
}, false);