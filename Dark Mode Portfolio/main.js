let currentSlide = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.blog-carousel');
    const items = document.querySelectorAll('.blog-item');
    const totalSlides = items.length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatically move the carousel every 3 seconds
setInterval(() => {
    moveCarousel(1);
}, 3000);
