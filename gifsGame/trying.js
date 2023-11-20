let image = document.getElementById("img");
const form = document.getElementById("form");
let div = document.querySelector(".div");
const input = document.getElementById("input");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("sig");
const video = document.getElementById("video")

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
    ); 
    let found = await api.json();
    return found;
  }
}

let r;

function renderizarGif(indice, result) {
  let newGif = result.data[indice].embed_url;
  video.src = newGif;
}

function renderizarGif2(indice, result, x) {
  let newGif = result.data[indice].embed_url;
  let newVideo = document.createElement("iframe");
  newVideo.src = newGif;
  newVideo.classList = "video";
  div.appendChild(newVideo);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let type = input.value;
  const gif = new Giphy(type);
  gif.getSearchResults().then((result) => {
    console.log(result);
    r = result;
    renderizarGif(0, result);
  });
});

let x = 1;
botonSiguiente.addEventListener("click", (e) => {
  console.log(x);
  if (x == 1) {
    renderizarGif(x, r);
    x++;
  } else {
    renderizarGif(x, r);
    x++;
  }
});

botonAnterior.addEventListener("click" ,(e) => {
  x-=1;
  console.log(x);

  if (x> 0) {
  x-=1;

    renderizarGif(x, r);
  } 
})