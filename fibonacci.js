/*Generar una secuencia de Fibonacci implica calcular una serie de números 
donde cada número es la suma de los dos números anteriores. A
quí tienes el paso a paso de cómo puedes crear una función en JavaScript para generar los primeros
 "n" términos de la secuencia de Fibonacci:

    Define una función llamada secuenciaFibonacci que tome un parámetro n, 
    que representará la cantidad de términos de la secuencia que deseas generar.

    Crea un arreglo inicial vacío para almacenar los términos de la secuencia.

    Agrega los dos primeros términos de la secuencia a este arreglo, que siempre son 0 y 1. 
    Puedes hacerlo como un caso base antes de ejecutar un bucle.

    Utiliza un bucle for para calcular y agregar los términos restantes de la secuencia. 
    Comienza desde el tercer término (índice 2) hasta el "n-ésimo" término.

    En cada iteración del bucle, calcula el siguiente término como la suma de los dos términos 
    anteriores y agrégalo al arreglo.

    Cuando hayas calculado y agregado los primeros "n" términos, la función debería 
    devolver el arreglo completo con la secuencia de Fibonacci. */

    function secuenciaFibonacci(n) {
        if (n <= 0) {
          return []; // Si n es menor o igual a 0, devolvemos un arreglo vacío.
        } else if (n === 1) {
          return [0]; // Si n es igual a 1, devolvemos un arreglo con un solo término (0).
        } else {
          const fibonacci = [0, 1]; // Inicializamos el arreglo con los dos primeros términos.
          
          for (let i = 2; i < n; i++) {
            const siguienteTermino = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(siguienteTermino); // Agregamos el siguiente término al arreglo.
          }
          
          return fibonacci;
        }
      }
      
    
      const n = 10; // Generar los primeros 10 términos de la secuencia de Fibonacci.
      const resultado = secuenciaFibonacci(n);
      console.log(resultado); 
      // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
