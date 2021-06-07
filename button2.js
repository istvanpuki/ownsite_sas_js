const menu = document.querySelector('.menu');
let menuOpen = false;
menu.addEventListener('mouseover', () => {
    if(!menuOpen) {
        menu.classList.add('open');
        menuOpen = true;
    } 
});

menu.addEventListener('mouseout', () => {
    if(menuOpen){
        menu.classList.remove('open');
        menuOpen = false;
    }
})