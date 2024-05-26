const newNavbar = document.createElement("header");
newNavbar.classList.add("header", "new");
newNavbar.innerHTML = `
    <div class="container">
        <div class="header__inner">
            <a class="header__logo" href="../html/Fibra.html">ФИБРА.БЕЛ</a>
            <navigation class="nav"> 
                <a class="nav__link" href="../html/Fibra.html">Главная</a>
                <a class="nav__link" href="../html/Fibra.html#anchor">Товары</a>
                <a class="nav__link" href="../html/How it works.html">Как работает</a>
                <a class="nav__link" href="../html/Kontakt.html">Контакты</a>
                <a class="nav__link" href="../html/Documents.html">Документация</a>
            </navigation>
        </div>
    </div>`;

let newNavbarAdded = false;
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    const scrollThreshold = 100;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollPosition > lastScrollTop && scrollPosition > scrollThreshold && !newNavbarAdded) {
        document.body.insertBefore(newNavbar, document.body.firstChild);
        setTimeout(() => {
            newNavbar.style.top = "0";
        }, 10); // Добавляем небольшую задержку для плавного появления
        newNavbarAdded = true;
    } else if (scrollPosition <= lastScrollTop && newNavbarAdded) {
        newNavbar.style.top = "-80px"; // Скрываем навбар перед его удалением
        setTimeout(() => {
            document.body.removeChild(newNavbar);
        }, 300); // Задержка перед удалением навбара
        newNavbarAdded = false;
    }

    lastScrollTop = scrollPosition;
});

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}
