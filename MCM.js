// Minimo comun multiplo

function encontrarElComunMasChicoDeDosArrays(arr1 , arr2) {
    const elementosComunes = arr1.filter(elemento => arr2.includes(elemento));

    // Verificar si se encontraron elementos comunes
    if (elementosComunes.length > 0) {
      // Encontrar el número más pequeño entre los elementos comunes
      const numeroMasChico = Math.min(...elementosComunes);
      return numeroMasChico;
    } else {
      // Si no hay elementos comunes, retornar un mensaje de error o un valor predeterminado
      return "No hay elementos comunes";
    }
}


function minimoComunMultiplo(num1, num2) {
    let arrayDeUno = [];
    let arrayDeDos= [];
    for (let i = 1; i < 20; i++) {
        arrayDeUno.push(num1 * i)
    }

    for (let i = 1; i < 20; i++) {
        arrayDeDos.push(num2 * i)
    }


    let resultado = encontrarElComunMasChicoDeDosArrays(arrayDeUno,arrayDeDos);

    return resultado
}


console.log(minimoComunMultiplo(6, 8));