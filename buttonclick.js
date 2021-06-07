const menu = document.querySelector('.menu');
const menuElements = document.querySelector('.menuelements')
let menuOpen = false;
menu.addEventListener('click', () => {
    if(!menuOpen) {
        menu.classList.add('open');
        menuOpen = true;
        //menuElements.classList.toggle('menuelements')
    } else {
        menu.classList.remove('open');
        menuOpen = false;
        //menuElements.classList.toggle('menuelements')
    }
});


menu.addEventListener('click', () => {
    menuElements.classList.toggle('menuelements')
});