/* var request = require("request");

var options = {
  method: 'GET',
  url : "https://v3.football.api-sports.io/fixtures",
  qs: {live: 'all'},
  
  
  url: 'https://v3.football.api-sports.io/leagues',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '174612a914bf3c533c7672ecc706f26d'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
*/
let image = document.querySelector("#img1");
let nombre = document.querySelector("#nombre");
let image2 = document.querySelector("#img2");
let nombre2 = document.querySelector("#nombre2");

function equipo1(logo,nombreEquipo){
  image.setAttribute("src",logo);
  nombre.innerHTML = nombreEquipo;
}
function equipo2(logo,nombreEquipo){
  image2.setAttribute("src",logo);
  nombre2.innerHTML = nombreEquipo;
}

let key = "2c6e53892b4fd81a84173e6497aecc629135c4a2003d6dd8ba8edf90a02f0d3a";
function mostrarEquipos(idEquipo,fucionEquipo){

fetch(`https://allsportsapi.com/api/football/?&met=Teams&teamId=${idEquipo}&APIkey=${key}`)
.then(response =>response.json())
.then((equipos) => {
  fucionEquipo(
  equipos.result[0].team_logo,
  equipos.result[0].team_name)
});
}

mostrarEquipos(2630,equipo1);

mostrarEquipos(2621,equipo2);
