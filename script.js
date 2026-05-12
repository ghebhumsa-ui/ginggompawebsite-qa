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

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});
