var request = require("request");

var options = {
  method: 'GET',
  url : "https://v3.football.api-sports.io/fixtures",
  qs: {live: 'all'},
  
  /*
  url: 'https://v3.football.api-sports.io/leagues',*/
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '174612a914bf3c533c7672ecc706f26d'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});

