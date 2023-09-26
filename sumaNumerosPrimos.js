const numerosPrimos = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97
  ];
  

function sumaNumerosPrimos(...numeros) {
    let resultado = 0;
    for (let numero of numeros) {
      if (numerosPrimos.includes(numero)) {
        resultado += numero;
      }
    }
    return resultado;
  }



  console.log(sumaNumerosPrimos(1,2,8,9,7));