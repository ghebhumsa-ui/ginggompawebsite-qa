function toggleReadMore(button) {
    const content = button.previousElementSibling;

    if (window.getComputedStyle(content).display === "none") {
        content.style.display = "block";
        button.innerText = "Read Less";
    } else {
        content.style.display = "none";
        button.innerText = "Read More";
    }
}

function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function closeMenu() {
    const button = document.querySelector(".menu-toggle");
    const menu = document.getElementById("site-navigation");

    if (!button || !menu) {
        return;
    }

    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open navigation menu");
    menu.classList.remove("open");
}

function toggleMenu() {
    const button = document.querySelector(".menu-toggle");
    const menu = document.getElementById("site-navigation");

    if (!button || !menu) {
        return;
    }

    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    button.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    menu.classList.toggle("open", !isOpen);
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".menu-toggle");
    const menu = document.getElementById("site-navigation");

    if (!button || !menu) {
        return;
    }

    button.addEventListener("click", function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    menu.addEventListener("click", function(event) {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("click", function(event) {
        if (!event.target.closest(".nav-container")) {
            closeMenu();
        }
    });
});

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeLightbox();
        closeMenu();
    }
});
