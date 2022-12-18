const precio = 400000;

const parrafoPrecio = document.querySelector("#precioFijo");
parrafoPrecio.textContent = `Precio: ${precio}`;

const boton = document.querySelector("#btn");
const color = document.querySelector("#inputColor");
const cantidad = document.querySelector("#inputCantidad");
const colorfinal = document.querySelector("#colorCompra");
const cantidadCompra = document.querySelector("#cantidadCompra");
const precioCompra = document.querySelector("#precioCompra");

boton.addEventListener ("click", () => {
    colorfinal.style.display = "block";
    colorfinal.style.backgroundColor = color.value;
    cantidadCompra.textContent = `Cantidad seleccionada: ${cantidad.value}`;
    precioCompra.textContent = `Precio total: $ ${cantidad.value * precio}`; 
})
