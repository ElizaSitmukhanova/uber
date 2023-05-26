const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu');

function openNav () {
      hamburger.classList.add(`hamburger_active`);
      menu.classList.add('menu_active');
}

function closeModal () {
    hamburger.classList.remove(`hamburger_active`);
    menu.classList.remove('menu_active');
}
hamburger.addEventListener('click', (e) => {
    if (hamburger.classList.contains('hamburger_active') && menu.classList.contains('menu_active')) {
        closeModal();
    } else {
        openNav();
    }

   console.log('hello');

});