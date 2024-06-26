export const setupAccordion = () => {
    const accordionItems = document.querySelectorAll('.accordion-item h3');
    
    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            content.classList.toggle('active');
        });
    });
};
