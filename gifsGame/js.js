let image = document.getElementById("img")
const select = document.getElementById("type")
window.addEventListener("load",(e)=> {
    fetch("https://api.giphy.com/v1/gifs/categories?api_key=VFidxXzab1k8WlrIZaIHJRjlOegWJBQw")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
         //image.src = data.data[4].gif.embed_url
    })
})

let div = document.getElementById("div")

select.addEventListener("change", (e)=> {
    let type = select.value
    fetch("https://api.giphy.com/v1/gifs/categories?api_key=VFidxXzab1k8WlrIZaIHJRjlOegWJBQw")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        for (let i = 0; i < data.data.length; i++) {
            console.log(data[i].data.name);
            if (data[i].data.name === type) {
                console.log("h");
                let newGif = data.data[i].gif.embed_url
                let newIframe = document.createElement("iframe")
                newIframe.src = newGif
                div.appendChild(newIframe)
            }
            
        }
        console.log(data);
       //  image.src = data.data[4].gif.embed_url
    })
})