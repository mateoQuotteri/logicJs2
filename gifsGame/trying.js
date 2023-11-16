let image = document.getElementById("img");
const form = document.getElementById("form"); // Cambiado de "select" a "form"
let div = document.querySelector(".div");
const input = document.getElementById("input");
const botonAnterior = document.getElementById("anterior")
const botonSiguiente = document.getElementById("sig")

class Giphy {
  constructor(search) {
    this.apiKey = "VFidxXzab1k8WlrIZaIHJRjlOegWJBQw";
    this.search = search;
  }

  async getSearchResults() {
    let api = await fetch(
      "https://api.giphy.com/v1/gifs/search?q=" +
        this.search +
        "&api_key=" +
        this.apiKey
    ); // Cambiado a HTTPS
    let found = await api.json();
    return found;
  }
}

let x = 0;

function renderizarGif(indice, result) {
  let newGif = result.data[indice].embed_url;
      let newVideo = document.createElement("iframe")
      newVideo.src = newGif
      div.appendChild(newVideo)
}
form.addEventListener("submit", (e) => {
  // Cambiado de "select" a "form"
  e.preventDefault(); // Evitar que el formulario se envíe y recargue la página
  let type = input.value;
  const gif = new Giphy(type);
  gif.getSearchResults().then((result) => {
    console.log(result);
    
    renderizarGif(0, result)
    //for (let i = 0; i < 10; i++) {
    //  let newGif = result.data[0].embed_url;
     // let newVideo = document.createElement("iframe")
     // newVideo.src = newGif
      // div.appendChild(newVideo)
      
    //}
  });
});

botonSiguiente.addEventListener("click", (e)=> {
  console.log(e);
  if (x = 0) {
    x = 1;
    renderizarGif(x)
  }else{
    x+=1;
    renderizarGif(x)
  }
})
