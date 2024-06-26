export const setupFilter = () => {
    const filterInput = document.getElementById('filter-input');
    const slides = document.querySelectorAll('.slide');
    
    filterInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        
        slides.forEach(slide => {
            const cityName = slide.querySelector('h2').textContent.toLowerCase();
            if (cityName.includes(query)) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    });
};
