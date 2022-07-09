export default function initDropDownMenu() {
  console.log('teste')
}

const dropDownMenus = document.querySelectorAll('[data-dropdown]');

dropDownMenus.forEach(menu => {
  menu.addEventListener('click',showMenu);
  menu.addEventListener('touchstart',showMenu);
})

function showMenu(e) {
  e.preventDefault();
  this.classList.toggle('ativo')
}