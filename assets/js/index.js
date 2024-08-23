


precio = 400000;
let suma = 0;


precioSpan = document.querySelector(".precio-inicial");
quantitySpan = document.querySelector(".cantidad");
const botonMas = document.querySelector(".botonMas");

precioSpan.innerHTML = precio;

quantitySpan.innerHTML = suma;


botonMas.addEventListener("click", () => {
suma++;
quantitySpan.innerHTML = suma; 
});


