/*
Calculadora Fibonacci:
Escribe una función que genere los primeros 
n números de la secuencia de Fibonacci, donde cada número es la suma de los dos anteriores 

EJEMPLO:
F(n)=F(n−1)+F(n−2)).*/



function calculadoraFibonacci(num) {
    const resultado = (num-1) + (num-2)    
    return resultado
}

console.log(calculadoraFibonacci(10));