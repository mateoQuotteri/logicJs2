let buttons = document.querySelectorAll(".add-to-cart");



buttons.forEach(element => {
    element.addEventListener("click",(e)=> {
        console.log(element.attributes[1].value);
    })
});


