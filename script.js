// Smooth scroll and highlight nav item
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href") === `#${current}`) {
            li.classList.add("active");
        }
    });
});

// Reveal sections on scroll
const revealSection = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionInView = sectionTop - window.innerHeight / 1.3 < 0;
        if (sectionInView) {
            section.classList.add("visible");
        }
    });
};
window.addEventListener("scroll", revealSection);

// Back-to-top button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
