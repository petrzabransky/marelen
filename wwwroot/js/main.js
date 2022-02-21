window.onload = function () {
    navMenu();
}


// Navigation menu collapse
function navMenu() {
    const hamb = document.querySelector(".nav__hamb");
    const close = document.querySelector(".nav__close");
    const menu = document.querySelector(".nav__menu");

    hamb.addEventListener("click", function () {
        if (menu.classList.contains("nav__menu--active")) {
            menu.classList.remove("nav__menu--active");
            hamb.src = "/img/ikona/hamburger.svg";
        } else {
            menu.classList.add("nav__menu--active");
            hamb.src = "/img/ikona/zavrit.svg";
        }
    });
}