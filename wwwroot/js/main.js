window.onload = function() {
    smoothScroll();
    navMenu();
}

// Smooth scrool
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < links.length; i++) links[i].onclick = function() {
        const target = document.querySelector(this.attributes.href.nodeValue),
            targetY = target.offsetTop;
        var speed, dir, step, dist, screenY,
            anim = setInterval((function() {
                screenY = document.documentElement.scrollTop + document.body.scrollTop,
                    dir = screenY <= targetY ? 1 : -1,
                    dist = Math.abs(screenY - targetY),
                    (speed = dist / 10) < 1 && (speed = 1), step = dir * speed, dist < 1 ? clearInterval(anim) : scrollBy(0, step)
            }), 10);
        return !1
    }
}

// Navigation menu collapse
function navMenu() {
    const hamb = document.querySelector(".nav__hamb");
    const close = document.querySelector(".nav__close");
    const menu = document.querySelector(".nav__menu");

    hamb.addEventListener("click", function() {
        if (menu.classList.contains("nav__menu--active")) {
            menu.classList.remove("nav__menu--active");
            hamb.src = "/img/ikona/hamburger.svg";
        } else {
            menu.classList.add("nav__menu--active");
            hamb.src = "/img/ikona/zavrit.svg";
        }
    });
}