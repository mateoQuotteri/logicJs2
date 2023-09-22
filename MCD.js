/*7. Calcular el máximo común divisor (MCD) de dos números:

    Crea una función que calcule el máximo 
    común divisor (MCD) de dos números enteros dados utilizando el algoritmo de Euclides.*/

    function encontrarNumeroMasGrande(arreglo) {
        if (arreglo.length === 0) {
          return "El arreglo está vacío";
        }
      
        let numeroMasGrande = arreglo[0]; // Inicializamos con el primer número del arreglo como referencia
      
        for (let i = 1; i < arreglo.length; i++) {
          if (arreglo[i] > numeroMasGrande) {
            numeroMasGrande = arreglo[i]; // Si encontramos un número más grande, lo actualizamos
          }
        }
      
        return numeroMasGrande;
      }
    function maximoComunDivisor(num1, num2) {
        let divisoresDelNumeroUno = []
        let divisoresDelNumeroDos = []

        for (let i = 0; i <= num1; i++) {
            if (num1 % i === 0) {
               divisoresDelNumeroUno.push(i)
            }
            
        }

        for (let i = 0; i <= num2; i++) {
            if (num2 % i === 0) {
               divisoresDelNumeroDos.push(i)
            }
            
        }


        console.log(divisoresDelNumeroUno);
        console.log(divisoresDelNumeroDos);

        let divisorMasGrandeDelNumeroUno = encontrarNumeroMasGrande(divisoresDelNumeroUno);
        

        console.log(divisorMasGrandeDelNumeroUno);


        if (divisoresDelNumeroDos.includes(divisorMasGrandeDelNumeroUno)) {
            return "El MCD es " + divisorMasGrandeDelNumeroUno
        }


    }



    console.log(maximoComunDivisor(10,20));