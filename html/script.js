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


// document.querySelector(".contact-form").addEventListener("submit", async function(event) {
//     event.preventDefault(); // Предотвращаем стандартное поведение формы
    
//     const form = this;
//     const formData = new FormData(form);

//     try {
//         const response = await fetch(form.action, {
//             method: form.method,
//             body: formData
//         });

//         if (response.ok) {
//             // Если запрос успешен, сбрасываем форму
//             form.reset();
//         } else {
//             // Если произошла ошибка, обрабатываем её
//             console.error("Ошибка при отправке формы", response.statusText);
//         }
//     } catch (error) {
//         console.error("Произошла ошибка", error);
//     }
// });

document.querySelector(".contact-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = this;
    const formData = new FormData(form);
    const data = {};

    // Convert FormData to a JSON object
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // If the request is successful, reset the form
            form.reset();
            console.log("Form successfully submitted");
        } else {
            console.error("Error submitting form", response.statusText);
        }
    } catch (error) {
        console.error("An error occurred while submitting the form", error);
    }
});

