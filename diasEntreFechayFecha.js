/*Calcular la 
cantidad de días entre dos fechas: Dadas dos fechas, 
calcula la cantidad de días que hay entre ellas. */


function calcularDiferenciaEnDias(fechaInicio, fechaFin) {
    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaFin.getTime() - fechaInicio.getTime();
    
    // Convierte la diferencia a días y redondea al número entero más cercano
    const diferenciaEnDias = Math.round(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    
    return diferenciaEnDias;
}

const fechaInicio = new Date("2023-09-15");
const fechaFin = new Date("2023-09-20");

const diferenciaEnDias = calcularDiferenciaEnDias(fechaInicio, fechaFin);
console.log(`La diferencia entre las fechas es de ${diferenciaEnDias} días.`);
