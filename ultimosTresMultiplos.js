function generar1(num) {
    let array =  [];
    for (let i = 100; i > 50; i--) {
        array.push(num * i)
    }

    return array
}

function generar2(num) {
    let array =  [];
    for (let i = 50; i > 1; i--) {
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





/*

let arr1= [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 
    84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 
    156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 
    252, 258, 264, 270, 276, 282, 288, 294, 300, 306, 312, 318, 324, 330, 336, 342,
     348, 354, 360, 366, 372, 378, 384, 390, 396, 402, 408, 414, 420, 426, 432, 438, 
     444, 450, 456, 462, 468, 474, 480, 486, 492, 498, 504, 510,
     516, 522, 528, 534, 540, 546, 552, 558, 564, 570, 576, 582, 588, 594, 600];
let arr2 = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240, 248, 256, 264, 272, 280, 288, 296, 304, 312, 320, 328, 336, 344, 352, 360, 368, 376, 384, 392, 400, 408, 416, 424, 432, 440, 448, 456, 464, 472, 480, 488, 496, 504, 512, 520, 528, 536, 544, 552, 560, 568, 576, 584, 592, 600, 608, 616, 624, 632, 640, 648, 656, 664, 672, 680, 688, 696, 704, 712, 720, 728, 736, 744, 752, 760, 768, 776, 784, 792, 800];
let result = [];

for (let i = 0; i < arr1.length; i++) {
   if (arr2.includes(arr1[i])) {
    result.push(arr1[i])
   }
    
}


console.log(result);*/