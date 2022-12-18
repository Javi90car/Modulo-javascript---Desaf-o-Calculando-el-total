 precio = 400000;

 parrafoPrecio = document.querySelector("#precioFijo");
parrafoPrecio.textContent = `Precio: ${precio}`;

 boton = document.querySelector("#btn");
 color = document.querySelector("#inputColor");
 cantidad = document.querySelector("#inputCantidad");
 colorfinal = document.querySelector("#colorCompra");
 cantidadCompra = document.querySelector("#cantidadCompra");
 precioCompra = document.querySelector("#precioCompra");

boton.addEventListener ("click", () => {
    colorfinal.style.display = "block";
    colorfinal.style.backgroundColor = color.value;
    cantidadCompra.innerHTML = `Cantidad seleccionada: ${cantidad.value}`;
    precioCompra.innerHTML = `Precio total: $ ${cantidad.value * precio}`; 
})
