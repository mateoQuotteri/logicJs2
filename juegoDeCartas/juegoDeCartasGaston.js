let numerosAleatorios = [];
const boton = document.getElementById("button");
const input = document.getElementById("numeros");
const operadores = ["+", "-", "*", "/"];
const message = document.getElementById("message");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");
const message4 = document.getElementById("message4");
const message5 = document.getElementById("message5");

const cartas = document.querySelectorAll(".carta");

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generarCartas() {
  const numerosInput = document.getElementById("numeros").value;
  const numerosArray = numerosInput
    .split(",")
    .map((numero) => parseInt(numero.trim(), 10));

  for (let i = 0; i < 4; i++) {
    let numeroAleatorio;
    do {
      numeroAleatorio = generarNumeroAleatorio(1, 9);
    } while (
      numerosAleatorios.includes(numeroAleatorio) ||
      numerosArray.includes(numeroAleatorio)
    );

    numerosAleatorios.push(numeroAleatorio);
  }

  for (let i = 0; i < numerosAleatorios.length; i++) {
    const carta = document.getElementById(`carta${i}`);
    carta.textContent = numerosAleatorios[i];
  }
}

// Esperar a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  generarCartas(); // Llamada a la función después de que el DOM esté cargado
});

input.addEventListener("input", function (event) {
  const numerosIngresados = event.target.value;
  // Hacer algo con los números ingresados
  const ultimoCaracter = numerosIngresados.charAt(numerosIngresados.length - 1);
  if (
    numerosAleatorios.includes(parseInt(ultimoCaracter, 10)) ||
    operadores.includes(ultimoCaracter)
  ) {
    console.log("Antes de filtrar:", numerosAleatorios);
    let numerosFiltrados = numerosAleatorios.filter(
      (numero) => numero !== parseInt(ultimoCaracter, 10)
    );
    numerosAleatorios = numerosFiltrados;
    console.log("Después de filtrar:", numerosAleatorios);
  } else {
    message.classList.remove("none");
    setTimeout(() => {
      var newValue = input.value.slice(0, -1);
      // Asigna el nuevo valor al input
      input.value = newValue;
      message.classList.add("none");
    }, 1500);
  }

  /*if (
    input.value.lastIndexOf(ultimoCaracter) !==
    input.value.indexOf(ultimoCaracter)
  ) {
    message2.classList.remove("none");
    setTimeout(() => {
      var newValue = input.value.slice(0, -1);
      // Asigna el nuevo valor al input
      input.value = newValue;
      message2.classList.add("none");
    }, 1500);
  }*/

  cartas.forEach((carta) => {
    if (carta.innerHTML == ultimoCaracter) {
      setTimeout(() => {
        carta.innerHTML = "Usada";
      }, 1500);
    }
  });
});

boton.addEventListener("click", (e) => {
  const valor = input.value;
  let resultado;

  try {
    resultado = eval(valor);
  } catch (error) {
    message5.classList.remove("none");
    setTimeout(() => {
      message5.classList.add("none");
    }, 1500);

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  console.log(resultado);

  if (resultado === 24) {
    message3.classList.remove("none");
  } else {
    message4.classList.remove("none");
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
});
