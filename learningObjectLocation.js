let url = location.href

// Almacenare solo el query de donde estoy parado
let query = location.search

//Con esto puedo interactuar de una forma mas amigable con esa query
let querySearch = new URLSearchParams(query)
//Por ejemplo puedo verificar si x dato esta presente en la query

if (queryString.includes("param1")) {
    // El parámetro "param1" está presente en la cadena de búsqueda
    console.log("El parámetro 'param1' está presente.");
} else {
    // El parámetro "param1" no está presente en la cadena de búsqueda
    console.log("El parámetro 'param1' no está presente.");
}

