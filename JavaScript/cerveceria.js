/* Creamos la funcion para que cuando la pagina este cargando, se muestre una pantalla de carga */
window.onload = function () {
    $ ('#onload').fadeOut();
    $("body").removeClass("hidden");
}