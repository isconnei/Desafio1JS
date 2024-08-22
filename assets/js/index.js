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
    /* total = suma * precio;
    valorActual.innerHTML = total;
    console.log(total);*/
  }
});
