const numerosAleatorios = [];
const boton = document.getElementById("button");
const input = document.getElementById("numeros");
const operadores = ["+" , "-" , "*" , "/" ];

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarCartas() {
    const numerosInput = document.getElementById('numeros').value;
    const numerosArray = numerosInput.split(',').map(numero => parseInt(numero.trim(), 10));

    for (let i = 0; i < 4; i++) {
        let numeroAleatorio = generarNumeroAleatorio(1, 12);
        numerosAleatorios.push(numeroAleatorio);
    }

    for (let i = 0; i < numerosAleatorios.length; i++) {
        const carta = document.getElementById(`carta${i}`);
        carta.textContent = numerosAleatorios[i];
    }
}

// Esperar a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    generarCartas(); // Llamada a la función después de que el DOM esté cargado
});


input.addEventListener("input", function(event) {
  const numerosIngresados = event.target.value;
  // Hacer algo con los números ingresados
  const ultimoCaracter = numerosIngresados.charAt(numerosIngresados.length - 1);

  
  console.log("Números ingresados:", ultimoCaracter);
});