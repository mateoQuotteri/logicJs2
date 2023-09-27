const boton = document.getElementById("calcular");
const costoComida = document.getElementById("costo-comida");
const porcentajePropina  = document.getElementById("porcentaje-propina");
const propina = document.getElementById("propina");
const costoTotal = document.getElementById("total")

boton.addEventListener("click" , (e)=> {
    let costoFinal = costoComida.value;
    let porcentajeElegido = porcentajePropina.value;

    if (isNaN(costoFinal) || isNaN(porcentajeElegido)) {
        return
    }else  {
/*
        console.log(costoFinal);
        console.log(porcentajeElegido);
        console.log(costoFinal / porcentajeElegido);
        */
       let propinaFinal =(costoFinal / porcentajeElegido);
       propina.textContent = propinaFinal;
       costoTotal.textContent =  parseInt(propinaFinal) + parseInt(costoFinal)
    }
})