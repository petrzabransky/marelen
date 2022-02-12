window.onload = function() {
    smoothScroll();
    navMenu();
    gallery();
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
    const menu = document.querySelector(".nav__menu");
    const close = document.querySelector(".nav__close");
    const nav = document.querySelector(".nav");

    hamb.addEventListener("click", function() {
        menu.style.display = "flex";
        hamb.style.display = "none";
        close.style.display = "block";
        nav.classList.add("nav__active");

    });

    close.addEventListener("click", function() {
        menu.style.display = "none";
        hamb.style.display = "block";
        close.style.display = "none";
        nav.classList.remove("nav__active");

    });
}

// Gallery portfolio image
function gallery() {
    const subImg = document.getElementsByClassName("gallery__small");

    for (let i = 0; i < subImg.length; i++) {
        subImg[i].addEventListener("mouseover", fullImg);
    }

    function fullImg() {
        const imgSrc = this.getAttribute("src");
        const imgTar = this.parentNode.parentNode.getElementsByClassName("gallery__big")[0];
        imgTar.src = imgSrc;
    }
}