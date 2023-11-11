const datosGuardados = JSON.parse(sessionStorage.getItem("datos")) || [];
const productosGuardados = JSON.parse(sessionStorage.getItem("productos")) || [];
const container = document.getElementById("container");

for (let i = 0; i < productosGuardados.length; i++) {
    let newBigDiv = document.createElement("div");
    newBigDiv.classList.add("product");

    let newSmallDiv = document.createElement("div");
    newSmallDiv.classList.add("product-details");

    let h2 = document.createElement("h2");
    h2.textContent = productosGuardados[i];
    h2.classList.add("product-title");

    let p = document.createElement("p");
    p.textContent = "$" +datosGuardados[i];
    p.classList.add("product-price");

   
    newSmallDiv.appendChild(h2);
    newSmallDiv.appendChild(p);
    newBigDiv.appendChild(newSmallDiv);
    container.appendChild(newBigDiv);


    /*let totalDiv = document.createElement("div")
    totalDiv.classList.add("total")

    let total = document.createElement("p")
    let totalArray = []
    datosGuardados.forEach(dato => {
        totalArray.push(parseInt(dato))
    });

    total.textContent = total.reduce((acumulador, numero) => acumulador + numero, 0);
    totalDiv.appendChild(total)**/
}
