const numerosAleatorios = [];
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generar 4 números aleatorios del 1 al 12
 

function generarCartas() {
  const numerosInput = document.getElementById('numeros').value;
  const numerosArray = numerosInput.split(',').map(numero => parseInt(numero.trim(), 10));


  for (let i = 0; i < 4; i++) {
    let numeroAleatorio = generarNumeroAleatorio(1, 12);
    numerosAleatorios.push(numeroAleatorio);
  }

  
      for (let i = 0; i <= numerosAleatorios.length; i++) {
          const carta = document.getElementById(`carta${i}`);
          carta.textContent = numerosAleatorios[i];
      }
      console.log(numerosAleatorios);
  
}

window.onload = generarCartas()