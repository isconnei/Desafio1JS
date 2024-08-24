precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let suma = 0;
quantitySpan = document.querySelector(".cantidad");
quantitySpan.innerHTML = suma;

const botonMenos = document.getElementById("botonMenos");

botonMenos.addEventListener("click", () => {
  if (suma > 0) {
    suma--;
    quantity.innerHTML = suma;
  }
});
/****************************/
/*** Inicio función total ***/
/****************************/

function total() {
  //obtengo elementos necesarios del DOM
  cantidadSpan = document.querySelector(".cantidad").innerHTML;
  valorTotalSpan = document.querySelector(".valor-total");

  //se despliega en pantalla calculo del total
  valorTotalSpan.innerHTML = Number(cantidadSpan) * Number(precio);
}
/***************************/
/**** Fin función total ****/
/***************************/
