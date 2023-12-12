document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const indicatorsContainer = document.querySelector('.indicators');
    const slides = document.querySelectorAll('.slide');

    let currentIndex = 0;

    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex) {
                indicator.classList.add('active');
            }
        });
    }

    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
        updateIndicators();
    }

    function createIndicators() {
        slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
                updateIndicators();
            });
            indicatorsContainer.appendChild(indicator);
        });
        updateIndicators();
    }

    createIndicators();

    setInterval(nextSlide, 3000);
});

