const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')
const fetchButton = document.querySelector('.fetchPokemonByID')
const newButton = document.querySelector('.newPokemon')

loadButton.addEventListener('click', () => {
  loadPage()
})

fetchButton.addEventListener('click', () => {
  let pokeId = prompt('Pokemon ID or Name:').toLowerCase()
  getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then((data) => populatePokeCard(data))
    .catch((error) => console.log(error))
})

class Pokemon {
  constructor(name, height, weight, abilities, moves) {
    this.id = 900
    this.name = name
    this.height = height
    this.weight = weight
    this.abilities = abilities
    this.moves = moves
  }
}

newButton.addEventListener('click', () => {
  let pokeName = prompt('What is the name of your new Pokemon?')
  let pokeHeight = prompt('Pokemon height?')
  let pokeWeight = prompt('Pokemon weight?')
  let newPokemon = new Pokemon(
    pokeName,
    pokeHeight,
    pokeWeight,
    ['eat', 'sleep'],
    ['study', 'code', 'silence'],
  )
  populatePokeCard(newPokemon)
})

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
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then(
    async (data) => {
      for (const singlePokemon of data.results) {
        await getAPIData(singlePokemon.url).then((pokeData) =>
          populatePokeCard(pokeData),
        )
      }
    },
  )
}

function populatePokeCard(singlePokemon) {
  // use the same html as in the CodePen Card flip example
  let pokeScene = document.createElement('div')
  pokeScene.className = 'scene'
  let pokeCard = document.createElement('div')
  pokeCard.className = 'card'
  pokeCard.addEventListener('click', () => {
    pokeCard.classList.toggle('is-flipped')
  })
  // make the card front
  pokeCard.appendChild(populateCardFront(singlePokemon))
  // make the card back
  pokeCard.appendChild(populateCardBack(singlePokemon))
  // append them all to pokeGrid
  pokeScene.appendChild(pokeCard)
  pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
  let pokeFront = document.createElement('div')
  pokeFront.className = 'card__face card__face--front'
  let frontLabel = document.createElement('p')
  frontLabel.textContent = pokemon.name
  let frontImage = document.createElement('img')
  frontImage.src = getImageFileName(pokemon)
  pokeFront.appendChild(frontImage)
  pokeFront.appendChild(frontLabel)

    let pokeType1 = pokemon.types[0].type.name
    pokeFront.style.setProperty('background', getPokeTypeColor(pokeType1))
  if (pokemon.types.length > 1) {
    let pokeType2 = pokemon.types[1].type.name
      frontImage.style.setProperty(
          'filter',
          `drop-shadow(10px 5px 4px ${getPokeTypeColor(pokeType2)})`)
  } /* else {
    pokeFront.style.setProperty('background', getPokeTypeColor(pokeType1))
  } */

  //pokeFront.classList.add(pokemon.types[0].type.name)

  return pokeFront
}

function populateCardBack(pokemon) {
  let pokeBack = document.createElement('div')
  pokeBack.className = 'card__face card__face--back'
  let backLabel = document.createElement('p')
  backLabel.textContent = `Moves: ${pokemon.moves.length}`
  pokeBack.appendChild(backLabel)

  pokemon.types.forEach((pokeType) => {
    //console.log(pokeType.type.name)
    let backType = document.createElement('p')
    backType.textContent = pokeType.type.name
    pokeBack.appendChild(backType)
  })

  return pokeBack
}

function getImageFileName(pokemon) {
  let pokeId
  if (pokemon.id < 10) pokeId = `00${pokemon.id}`
  if (pokemon.id > 9 && pokemon.id < 100) pokeId = `0${pokemon.id}`
  if (pokemon.id > 99 && pokemon.id < 810) pokeId = pokemon.id
  if (pokemon.id === 900) {
    return `images/pokeball.png`
  }
  return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeId}.png`
}

function getPokeTypeColor(pokeType) {
  let color
  switch (pokeType) {
    case 'grass':
      color = '#00FF00'
      break
    case 'fire':
      color = '#FF0000'
      break
    case 'water':
      color = '#0000FF'
      break
    case 'bug':
      color = '#7fff00'
      break
    case 'normal':
      color = '#f5f5dc'
      break
    case 'flying':
      color = '#00ffff'
      break
    case 'poison':
      color = '#c300ff'
      break
    case 'electric':
      color = '#c8ff00'
      break
    default:
      color = '#555555'
  }
    return color
}
