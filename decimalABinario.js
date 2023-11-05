function decimalABinario(decimal) {
    let binaryNumber = '';
    while (decimal > 0) {
        let remainder = decimal % 2;
        binaryNumber = remainder + binaryNumber;
        decimal = Math.floor(decimal / 2);
    }
    // Si el número de entrada es 0, el resultado en binario también es 0
    if (binaryNumber === '') {
        binaryNumber = '0';
    }
    return binaryNumber;
}

let decimalNumber = 10; // Puedes cambiar este número según tus necesidades
let binaryResult = decimalABinario(decimalNumber);
console.log(`El número binario equivalente a ${decimalNumber} es: ${binaryResult}`);


/*En este código, la función
toma un número decimal como entrada y devuelve su representación en binario. 
La función utiliza un bucle while para dividir el número decimal por 2 sucesivamente 
hasta que el cociente sea 0. Los residuos se concatenan en la parte delantera de 
la cadena binaryNumber, que luego se devuelve como el resultado en binario. */