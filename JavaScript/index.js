/* Creamos la funcion para que cuando la pagina este cargando, se muestre una pantalla de carga */
window.onload = function () {
    $ ('#onload').fadeOut();
    $("body").removeClass("hidden");
}
const navToggle = document.querySelector (".nav-toggle")
const navMenu = document.querySelector (".nav-menu")

navToggle.addEventListener ("click", () => {
    navMenu.classList.toggle ("nav-menu_visible")
})
