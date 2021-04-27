const main = document.querySelector('main')


fetch("https://aerisweather1.p.rapidapi.com/alerts/jordan,mt", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "",
		"x-rapidapi-host": "aerisweather1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
