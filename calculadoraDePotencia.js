/*20. Calculadora de Potencia:
Crea una función que tome dos números
 como entrada, base y exponente, y devuelva el resultado de elevar la base al exponente.*/


 function calc(num, potencia) {
     let numero = num;

     for (let i = 1; i < potencia; i++) { 
         numero *= num
     }

     return numero
 }


 console.log(calc(2,4));