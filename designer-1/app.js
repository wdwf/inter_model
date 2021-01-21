function OpenMenu() {
  let home = document.querySelector('.home');
  home.classList.toggle('home-scale');

}

let btnMenu = document.querySelector('.go-menu');
btnMenu.addEventListener('click', OpenMenu);

let btnMenuClose = document.querySelector('.go-home');
btnMenuClose.addEventListener('click', OpenMenu);


let menuItem = document.querySelectorAll('.menu__items li');

Array.from(menuItem).forEach(elem => {
  elem.addEventListener('click', itemSelect)
});

function itemSelect() {
  this.classList.toggle('item_selecionado');
}