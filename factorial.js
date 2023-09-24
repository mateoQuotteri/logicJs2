/*Ejercicio 3: Factorial de un número
Escribe una función que calcule el factorial de un número entero dado.
 El factorial de un número es el producto de todos los enteros positivos desde 1 hasta ese número.
 Por ejemplo, el factorial de 5 es 5! = 5 x 4 x 3 x 2 x 1 = 120.*/

 function factorial(num) {
     let numeros = [];

     for (let i = 1 ; i <= num; i++) {
       numeros.push(i)
     }
     //const fact = numeros.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

     let fact  = numeros.reduce(myFunc);

     function myFunc(total, num) {
       return total * num;
     }

     return fact
     
 }


 console.log(factorial(8));