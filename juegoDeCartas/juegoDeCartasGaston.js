function generarCartas() {
  const numerosInput = document.getElementById('numeros').value;
  const numerosArray = numerosInput.split(',').map(numero => parseInt(numero.trim(), 10));

  if (numerosArray.length === 4) {
      for (let i = 1; i <= 4; i++) {
          const carta = document.getElementById(`carta${i}`);
          carta.textContent = numerosArray[i - 1];
      }
  } else {
      alert('Por favor, ingrese 4 números separados por comas.');
  }
}
