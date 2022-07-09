export default function initDropDownMenu() {
  console.log('teste')
}

const dropDownMenus = document.querySelectorAll('[data-dropdown]');

dropDownMenus.forEach(menu => {
  ['click','touchstart'].forEach(event => {
    menu.addEventListener(event,showMenu);
  })
})

function showMenu(e) {
  e.preventDefault();
  this.classList.add('ativo')
  outSideClick(this,['click','touchstart'],() => {
    this.classList.remove('ativo')
  });
}

function outSideClick(element,eventos,callback) {
  const outside = 'data-outside';
  
  const html = document.documentElement;
  if(!element.hasAttribute(outside)) {
    eventos.forEach(userEvent => {
      html.addEventListener(userEvent,handleOutSideClick);
    })
    element.setAttribute(outside,'');
    
  }
  
  function handleOutSideClick(event) {
    if(!element.contains(event.target)) { // verifica se o click nao foi no element, se nao foi, executa a função de remover class e vai fecha-lo
      element.removeAttribute(outside)
      eventos.forEach(userEvent => {
        html.removeEventListener(userEvent,handleOutSideClick);
      })
      callback();
    }
    
  }
}