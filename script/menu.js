document.querySelector('.menu_hamburguesa').addEventListener('click', () => {
  CerrarMenu();
  AbrirMenu();
});

function AbrirMenu() 
{
  let contenido_menu = document.querySelector('.content-menu');
  contenido_menu.classList.toggle('display-content-menu');
}

function CerrarMenu() 
{
  let menu_hamburguesa = document.querySelector('.menu_hamburguesa');
  menu_hamburguesa.classList.toggle('close-menu_hamburguesa');
}