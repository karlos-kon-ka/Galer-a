document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".animated-image");
    images.forEach(image => {
        image.addEventListener("animationend", function() {
            this.style.animationPlayState = "paused"; // Detiene la animación después de que ocurre una vez
        });
    });
});

