// Wrap pokemonList in IIFE
let pokemonRepository = (function () {
  let pokemonList = [];
  // let apiURL = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let apiURL = "https://pokeapi.co/api/v2/pokemon/";

  function loadList() {
    showLoadingMessage();
    return fetch(apiURL)
      .then(function (response) {
        hideLoadingMessage();
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (pokemonItem) {
          let pokemon = {
            name: pokemonItem.name,
            url: pokemonItem.url,
          };

          add(pokemon);
        });
      })
      .catch(function (error) {
        hideLoadingMessage();
        console.error(error);
      });
  }

  function loadDetails(pokemon) {
    showLoadingMessage();

    let url = pokemon.url;

    return fetch(url)
      .then(function (response) {
        hideLoadingMessage();
        return response.json();
      })
      .then(function (pokemonDetails) {
        pokemon.imageURL = pokemonDetails.sprites.front_default;
        pokemon.height = pokemonDetails.height;
        pokemon.types = pokemonDetails.types;
      })
      .catch(function (error) {
        hideLoadingMessage();
        console.error(error);
      });
  }

  function showLoadingMessage() {
    console.log("Loading... Please wait...");
    let paragraph = document.createElement("p");
    paragraph.classList.add("loading-msg");
    paragraph.innerText = "Loading... Please wait...";
    document.body.appendChild(paragraph);
  }

  function hideLoadingMessage() {
    console.log("Done");
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  let list = document.createElement("ul");
  list.classList.add("pokemon-list");
  document.body.appendChild(list);

  function addListItem(pokemon) {
    let listItem = document.createElement("li");
    list.appendChild(listItem);

    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    listItem.appendChild(button);
    clickable(button, pokemon);
  }

  function clickable(button, pokemon) {
    button.addEventListener("click", function (event) {
      return showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log("CLICK");
    // console.log(pokemon.name);
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    addListItem: addListItem,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
