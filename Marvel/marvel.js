const main = document.querySelector('main')


fetch("https://aerisweather1.p.rapidapi.com/alerts/jordan,mt", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f4810bc1e1msh8e5f44dd0f55ddfp107b05jsnc1c5efa46815",
		"x-rapidapi-host": "aerisweather1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
