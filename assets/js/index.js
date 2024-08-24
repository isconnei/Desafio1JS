precio = 400000;
let suma = 0;

precioSpan = document.querySelector(".precio-inicial");
quantitySpan = document.querySelector(".cantidad");
const botonMas = document.querySelector(".botonMas");

precioSpan.innerHTML = precio;

quantitySpan = document.querySelector(".cantidad");
quantitySpan.innerHTML = suma;

const botonMenos = document.getElementById("botonMenos");

botonMenos.addEventListener("click", () => {
  if (suma > 0) {
    suma--;
    quantitySpan.innerHTML = suma;
    total();
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
quantitySpan.innerHTML = suma;

botonMas.addEventListener("click", () => {
  suma++;
  quantitySpan.innerHTML = suma;
  total();
});
