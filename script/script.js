const burgerBtn = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const menuItem = document.querySelectorAll('.menu__item');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const trackList = document.querySelectorAll('.tracklist__item');
const windowWidth = document.documentElement.clientWidth;
const subList = document.querySelector('.menu__sub-list');
const subListLink = document.querySelector('.menu__item-arrow')

burgerBtn.addEventListener('click', function() {
    header.classList.toggle('header_active')
    main.classList.toggle('main_active')
})

for (let item of menuItem) {
    item.addEventListener('click', function() {
        item.classList.add('menu__item_active')        
    })
}

for (let item of trackList) {
    item.addEventListener('click', function() {
        item.classList.add('tracklist__item_active')
    })
}


const toggleFixedHeader = () => {    
    if (windowWidth >= 660 && header.classList.contains('header_active')) {
        header.classList.remove('header_active')
    }
};

document.addEventListener('DOMContentLoaded', toggleFixedHeader);
window.addEventListener('resize', toggleFixedHeader);


subListLink.addEventListener('click', () => {
    subList.classList.toggle('menu__sub-list_active')
})
