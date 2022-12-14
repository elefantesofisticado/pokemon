const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max-min)) + min;
}

let numPkmn = getRandomInt(1,151)
let limit = 0;
let offset = 1;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 9;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 9;
  removeChildNodes(pokemonContainer);
  fetchPokemons(offset, limit);
});

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${numPkmn}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
      spinner.style.display = "none";
    });
}

function fetchPokemons(offset, limit) {
  spinner.style.display = "block";
  for (let i = offset; i <= offset + limit; i++) {
    fetchPokemon(i);
  }
}

function createPokemon(pokemon) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("h2");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
//  card.appendChild(number);
  card.appendChild(name);

  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");

  // cardBack.appendChild(progressBars(pokemon.stats));

  cardBack.appendChild(number);



  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  pokemonContainer.appendChild(flipCard);
}

function progressBars(stats) {
  const idPkmn = document.createElement("p");

  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  for (let i = 0; i < 3; i++) {
    const stat = stats[i];

    const statPercent = stat.base_stat / 2 + "%";
    const statContainer = document.createElement("stat-container");
    statContainer.classList.add("stat-container");

    const statName = document.createElement("p");
    statName.textContent = stat.stat.name;

    const progress = document.createElement("div");
    progress.classList.add("progress");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 200);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);
  }

  return statsContainer;
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//function inputRange = document.getElementById("vol") => {
  
//}

//if(numPkmn = 'outvol' ) {
//  console.log("si")
//}
//console.log("no")



function recogerDatos(){
  let outPkmn = document.getElementById("outvol").value
  
  var idPokemon = numPkmn
      
      console.log("pokem??n " + idPokemon)
      console.log ("poke " + outPkmn)
      var falta = "Te falta a??n!"
      var sobre = "Te pasaste!"
      if (outPkmn < idPokemon) {
        console.log("falta");
        document.getElementById("intento").textContent=falta;
        document.getElementById("intento").style="color: red";
      }else if(outPkmn > idPokemon) {
        console.log("sobra");
        document.getElementById("intento").textContent=sobre;
        document.getElementById("intento").style="color: green";
      }else if(outPokmn = idPokemon) {
        console.log("justo");
        document.getElementById("intento").textContent="ATRAPADO!"
        document.getElementById("intento").style="font-weight: bold";
        document.getElementById("intento").style="font-size: 33px";

      }



}

fetchPokemons(offset, limit);
