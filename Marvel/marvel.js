const main = document.querySelector('main')

async function getAPIData(url) {
  try {
    const response = await fetch(url) // try getting data from the API at the url provided
    const data = await response.json() // convert the response into JSON
    return data // return the data from the function to whoever called it
  } catch (error) {
    // must have been an error
    console.log(error)
    alert('Could not find that data')
  }
}

function loadPage() {
  getAPIData(
    `https://gateway.marvel.com:443/v1/public/characters?apikey=d09a3b298e51e26ea519b4d5b519f8b7`,
  ).then(async (data) => {
    console.log(data)
  })
}

loadPage()

