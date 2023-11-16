let image = document.getElementById("img");
const form = document.getElementById("form"); // Cambiado de "select" a "form"
let div = document.querySelector(".div")
const input = document.getElementById("input")
class Giphy {
  constructor(search) {
    this.apiKey = 'VFidxXzab1k8WlrIZaIHJRjlOegWJBQw';
    this.search = search;
  }

  async getSearchResults() {
    let api = await fetch('https://api.giphy.com/v1/gifs/search?q=' + this.search + '&api_key=' + this.apiKey); // Cambiado a HTTPS
    let found = await api.json();
    return found;
  }
}

form.addEventListener("submit", (e) => { // Cambiado de "select" a "form"
  e.preventDefault(); // Evitar que el formulario se envíe y recargue la página
  let type = input.value;
  const gif = new Giphy(type);
  gif.getSearchResults().then((result) => {
    console.log(result);
    for (let i = 0; i < 10; i++) {
      let newGif = result.data[i].embed_url;
      let newVideo = document.createElement("iframe")
      newVideo.src = newGif
      div.appendChild(newVideo)
      
    }

   });
  });

