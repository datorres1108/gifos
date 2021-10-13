//import * as base from './baserules.js';


if (localStorage.getItem('modooscuro') === 'true') 
{
    CuerpoModo_oscuro();
    TextoModo_oscuro();
}

document.getElementById('modo_oscuro').addEventListener('click', () => {
   alert();
   
     CuerpoModo_oscuro();
     //TextoModo_oscuro();
     CerrarMenu();
     AbrirMenu();
  });

function CuerpoModo_oscuro() 
{
    alert("cuerpo");
    let body = document.getElementsByTagName('body')[0];
    body.classList.toggle('Modo-Oscuro');
}

function TextoModo_oscuro() 
{
    let modo_oscuro = document.getElementById('modo_oscuro');
    if (modo_oscuro.innerHTML === base.nocturno) 
    {
      modo_oscuro.innerHTML = base.diurno;
      localStorage.setItem('modooscuro', 'true');
    } else 
    {
      modo_oscuro.innerHTML = base.nocturno;
      localStorage.setItem('modooscuro', 'false');
    }
}