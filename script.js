// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '2rem';
        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Carousel Logic
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
const dotsNav = document.querySelector('.carousel-nav');

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// Generate dots dynamically
// We show 3 slides at a time, so the last valid index is slides.length - 3
const maxIndex = Math.max(0, slides.length - 3);

for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement('button');
    dot.classList.add('carousel-indicator');
    if (i === 0) dot.classList.add('current-slide');
    dotsNav.appendChild(dot);
}

const dots = Array.from(dotsNav.children);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === maxIndex) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
};

// When I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// When I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// When I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

// Auto-play functionality
let autoPlayInterval;

const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
        const currentSlide = track.querySelector('.current-slide');
        let nextSlide = currentSlide.nextElementSibling;
        let nextIndex = slides.findIndex(slide => slide === nextSlide);
        let currentDot = dotsNav.querySelector('.current-slide');
        let nextDot = currentDot.nextElementSibling;

        // If nextIndex exceeds maxIndex, loop back to start
        if (nextIndex > maxIndex || !nextSlide) {
            nextSlide = slides[0];
            nextIndex = 0;
            nextDot = dots[0];
            currentDot = dotsNav.querySelector('.current-slide'); // Re-select current dot to be safe
        }

        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
    }, 4000); // Change slide every 4 seconds
};

const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
};

// Start auto-play on load
startAutoPlay();

// Stop auto-play on interaction
track.addEventListener('mouseenter', stopAutoPlay);
prevButton.addEventListener('mouseenter', stopAutoPlay);
nextButton.addEventListener('mouseenter', stopAutoPlay);
dotsNav.addEventListener('mouseenter', stopAutoPlay);

// Resume auto-play on mouse leave
track.addEventListener('mouseleave', startAutoPlay);
prevButton.addEventListener('mouseleave', startAutoPlay);
nextButton.addEventListener('mouseleave', startAutoPlay);
dotsNav.addEventListener('mouseleave', startAutoPlay);

// Lightbox Logic
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];
const carouselImages = document.querySelectorAll('.carousel-slide img');

carouselImages.forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modalImg.src = this.src;
        stopAutoPlay(); // Stop carousel when modal is open
    });
});

closeBtn.onclick = function () {
    modal.style.display = "none";
    startAutoPlay(); // Resume carousel when modal is closed
}

modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
        startAutoPlay(); // Resume carousel when modal is closed
    }
}

// Close on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
        startAutoPlay(); // Resume carousel when modal is closed
    }
});
