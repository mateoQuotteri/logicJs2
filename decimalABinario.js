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
