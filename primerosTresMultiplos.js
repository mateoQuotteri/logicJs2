function generar1(num) {
    let array =  [];
    for (let i = 1; i < 15; i++) {
        array.push(num * i)
    }

    return array
}

function generar2(num) {
    let array =  [];
    for (let i = 14; i < 30; i++) {
        array.push(num * i)
    }

    return array
}

function encontrar(num1, num2) {
    let primerosMultiplosNum1 = generar1(num1);
    let primerosMultiplosNum2 = generar1(num2);
    let array =  [];

    for (let i = 0; i < primerosMultiplosNum1.length; i++) {
        if (primerosMultiplosNum2.includes(primerosMultiplosNum1[i]) && array.length < 3) {
            array.push(primerosMultiplosNum1[i])
        }        
    }

    if (array.length < 3) {
        let segundosMultiplosNum1 = generar2(num1);
        let segundosMultiplosNum2 = generar2(num2);
        for (let i = 0; i < segundosMultiplosNum1.length; i++) {
            if (segundosMultiplosNum2.includes(segundosMultiplosNum1[i]) && array.length < 3) {
                array.push(segundosMultiplosNum1[i])
            }        
        }

    }

    return array

}

console.log(encontrar(6,8));