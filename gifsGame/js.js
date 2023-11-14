let image = document.getElementById("img")
window.addEventListener("load",(e)=> {
    fetch("https://api.giphy.com/v1/gifs/categories?api_key=VFidxXzab1k8WlrIZaIHJRjlOegWJBQw")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
         image.src = data.data[4].gif.embed_url
    })
})