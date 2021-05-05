const fila = document.querySelector('.contenedor-carrusel');
const gifos = document.querySelectorAll('.gifos');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

//Movimiento scroll del carrusel
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }

});
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

//paginacion 
const numeroPagina = gifos.length / 3;
for (let i = 0; i < numeroPagina; i++) 
{
    const indicador = document.createElement('button');
    if(i ===0){
        indicador.classList.add('activo');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e)=> {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
    
}


