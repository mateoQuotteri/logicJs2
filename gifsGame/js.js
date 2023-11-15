let image = document.getElementById("img");
const select = document.getElementById("type");


document.addEventListener("DOMContentLoaded", function () {
    // Mover la selección del elemento .div aquí
    
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
                    if (data.data[i].name === type) {
                        console.log("h");
                        let body = document.getElementById("body")
                        console.log(body);
                        let newIframe = document.createElement("iframe");
                        doingMagic(data.data[i].gif.embed_url, newIframe, body);
                    }
                }
            });
        });
    });
    
    function doingMagic(content, element , dad) {
        let newGif = content;
        element.src = newGif;
        dad.appendChild(element)
    }
