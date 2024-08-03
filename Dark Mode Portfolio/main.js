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


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulating form submission
    setTimeout(() => {
        // Show fireworks and thank you message
        document.getElementById('fireworks-container').style.display = 'flex';

        // Hide fireworks after 3 seconds
        setTimeout(() => {
            document.getElementById('fireworks-container').style.display = 'none';
        }, 3000);
    }, 500);

    // In a real-world scenario, you would send the form data to your server here
    // For example, using fetch or XMLHttpRequest
});
