export const setupSlider = () => {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;
    
    const showSlide = (index) => {
        slides.forEach((slide, idx) => {
            slide.style.display = idx === index ? 'block' : 'none';
        });
    };
    
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };
    
    // Initial display
    showSlide(currentIndex);
    
    // Set interval for automatic slide change
    setInterval(nextSlide, 3000);
};
