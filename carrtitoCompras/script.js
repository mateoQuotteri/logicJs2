let buttons = document.querySelectorAll(".add-to-cart");
let items = document.getElementById("items")
let total = document.getElementById("cart-total")

window.addEventListener("load", ()=> {
  localStorage.removeItem("datos")
  localStorage.removeItem("productos")

})

// Cada vez que se clickea en "agregar al carrito" el precio del producto
// que se agrego al carrito se visualiza en el mini carrito situado en la esquina derecha superior
//del home

function renderizarItemsEnCarrito() {
    const datosGuardados = JSON.parse(localStorage.getItem("datos"));

        let ultimo = datosGuardados.length;

        let e = datosGuardados[ultimo - 1]
//    datosGuardados.forEach(e => {
        let newItem = document.createElement("h6")
        newItem.textContent = "$"+ e;

        items.appendChild(newItem)

        let totalActual = parseInt(total.innerHTML)
        parseInt(totalActual)

        totalActual+= parseInt(e);

        total.textContent = totalActual
   // });
}

buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(element.attributes[1].value);

    const nuevoDato = element.attributes[1].value
    const nuevoProducto = element.previousElementSibling.innerHTML;

    // Obtiene los datos existentes del localStorage (si los hay)
    const datosGuardados = JSON.parse(localStorage.getItem("datos")) || [];
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];

    // Agrega el nuevo dato al arreglo de datos
    datosGuardados.push(nuevoDato);
    productosGuardados.push(nuevoProducto)

    // Almacena los datos actualizados en el localStorage
    localStorage.setItem("datos", JSON.stringify(datosGuardados));
    localStorage.setItem("productos", JSON.stringify(productosGuardados));



    renderizarItemsEnCarrito();
  });
});

