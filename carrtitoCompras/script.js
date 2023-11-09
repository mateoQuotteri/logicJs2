let buttons = document.querySelectorAll(".add-to-cart");
let items = document.getElementById("items")



function renderizarItemsEnCarrito() {
    const datosGuardados = JSON.parse(localStorage.getItem("datos"));

    let ultimo = datosGuardados.length;

       let e = datosGuardados[ultimo - 1]
//    datosGuardados.forEach(e => {
        let newItem = document.createElement("h6")
        newItem.textContent = e;

        items.appendChild(newItem)
   // });
}

buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(element.attributes[1].value);

    const nuevoDato = element.attributes[1].value

    // Obtiene los datos existentes del localStorage (si los hay)
    const datosGuardados = JSON.parse(localStorage.getItem("datos")) || [];

    // Agrega el nuevo dato al arreglo de datos
    datosGuardados.push(nuevoDato);

    // Almacena los datos actualizados en el localStorage
    localStorage.setItem("datos", JSON.stringify(datosGuardados));


    renderizarItemsEnCarrito();
  });
});

