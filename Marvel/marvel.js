const main = document.querySelector('main')


fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${process.env.MARVEL_APIKEY}`)
.then(response => {
	console.log(response)
})
.catch(err => {
	console.error(err)
})

