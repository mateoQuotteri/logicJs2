/*For in */

const persona  = { 
    nombre : "Mateo",
    edad : 19
}

for (const dato in persona) {
   console.log(dato , persona[dato]);
}


/*for of */

const frutas = ["Banana" , "Manzana", "Pera", "Frutilla", "Sandia"]

for (const fruta of frutas) {
    console.log(fruta);
}