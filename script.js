const access_token = '987780065863328'
const base_url = `https://superheroapi.com/api.php/${access_token}`
const newHeroButton = document.getElementById('newHeroBtn')

const heroImgDiv = document.getElementById('heroImage')
const getSearchBtn = document.getElementById('search_button')
const searchInput = document.getElementById('searchInput')
const statDiv = document.getElementById('stats')

const getSuperHero = (id) => {
  fetch(`${base_url}/${id}`)
  .then(response => response.json())
  .then(json => {
  showHeroInfo(json)
  })
  
}

const searchSuperHero = (name) => {
  fetch(`${base_url}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    const hero = json.results[0]
    //console.log(hero)
    //heroImgDiv.innerHTML = `<img src="${hero.image.url}" height = 200 width = 200 />`
   showHeroInfo(hero)
  })
}

const randomHero = () => {
  const noOfHeroes = 731
  return Math.floor(Math.random()*noOfHeroes) + 1
}

const showHeroInfo = (character) =>{
  const name = `<h2>${character.name}</p>`
  const image = `<img src="${character.image.url}" height = 200 width = 200 />`
  
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${stat.toUpperCase()} : ${character.powerstats[stat]}</p>`
  }).join('')
  
  //console.log(stats.join(''))
  heroImgDiv.innerHTML = `${name}${image}${stats}`
}
newHeroButton.onclick = () => getSuperHero(randomHero())
getSearchBtn.onclick = () => searchSuperHero(searchInput.value)