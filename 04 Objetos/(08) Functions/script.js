const li = document.querySelectorAll('li');


const filtro = Array.prototype.findIndex.call(li,(item,index,array) => {
  return item;
})
  console.log(filtro);