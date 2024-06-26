export const initBurgerMenu = () => {
    const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('nav');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
        burger.classList.toggle('toggle');
    });
};
