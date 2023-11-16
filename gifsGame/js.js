let image = document.getElementById("img");
const select = document.getElementById("type");


document.addEventListener("DOMContentLoaded", function () {
    // Mover la selección del elemento .div aquí
    
    let array = []
    select.addEventListener("change", (e) => {
        let type = select.value;
        console.log(type);
        fetch(
            "https://api.giphy.com/v1/gifs/categories?api_key=VFidxXzab1k8WlrIZaIHJRjlOegWJBQw"
            )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                for (let i = 0; i < data.data.length; i++) {
                    const div = document.querySelector(".div");
                    console.log(i);
                    if (data.data[i].name === type) {
                      // array.push(data.data[i].gif.embed_url)
                       for (let x = 0; x < data.data[i].gif.images.length; x++) {
                        array.push(data.data[i].gif.images[x].url)                        
                       }

                        //let body = document.getElementById("body")
                        //onsole.log(body);
                        //let newIframe = document.createElement("iframe");
                 
                        //doingMagic(data.data[i].gif.embed_url, newIframe, body);
                    }
                }
                console.log(array);
            });
        });
    });
    
    function doingMagic(content, element , dad) {
        let newGif = content;
        element.src = newGif;
        dad.appendChild(element)
    }
