//Ejecuto para menu hambuerguesa
var navToggle = document.querySelector(".nav-toggle"); //Boton menu hamburguesa
var navMenu = document.querySelector(".nav-menu"); //Ul del nav menu

navToggle.addEventListener("click", () => {
	//alert();
	navMenu.classList.toggle("nav-menu_visible");
});