function getData(altura, peso) {
    var imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log("Bajo peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidad");
    }
}


getData(1.69, 79)