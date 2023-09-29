
//Ejemplo: Verificar si hay al menos un número par en un array.
const numeros = [3, 7, 8, 5, 12];
const hayNumeroPar = numeros.some(numero => numero % 2 === 0);
console.log(hayNumeroPar); // Resultado: true


/*find(): Este método devuelve el primer elemento en el array que cumple con una condición dada. Si no encuentra ninguna coincidencia, devuelve undefined.

Ejemplo: Encontrar un número mayor que 10 en un array.

javascript */

const numerosNUN = [5, 8, 12, 3, 17];
const numeroMayorDiez = numerosNUN.find(numero => numero > 10);
console.log(numeroMayorDiez); // Resultado: 12




/*Ejemplo: Convertir un objeto en un array de objetos.
 */
const objeto = { a: 1, b: 2, c: 3 };
const arrayDeObjetos = Object.entries(objeto).map(([clave, valor]) => ({ clave, valor }));
console.log(arrayDeObjetos); 
// Resultado: [{ clave: "a", valor: 1 }, { clave: "b", valor: 2 }, { clave: "c", valor: 3 }]
