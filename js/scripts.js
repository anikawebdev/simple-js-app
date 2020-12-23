// Wrap pokemonList in IIFE
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiURL = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  let list = document.createElement("ul");
  list.classList.add("list-group");

  function loadList() {
    return fetch(apiURL)
      .then(function (response) {
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
        console.error(error);
      });
  }

  function loadDetails(pokemon) {

    let url = pokemon.url;

    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (pokemonDetails) {
        pokemon.imageURL = pokemonDetails.sprites.other.dream_world.front_default;
        pokemon.height = pokemonDetails.height;
        pokemon.types = [];
        pokemonDetails.types.forEach(function (pokemontype) {
          pokemon.types.push(pokemontype.type.name);
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    list.appendChild(listItem);

    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.setAttribute("type", "button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#exampleModalCenter");
    listItem.appendChild(button);
    document.body.appendChild(list);
    button.addEventListener("click", function (event) {
      return showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
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


//
// MODAL
//
function showModal(pokemon) {

  let modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = "";

    let modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    
      let modalTitle = document.createElement("h2");
      modalTitle.classList.add("modal-title");
      modalTitle.setAttribute("id","exampleModalCenterTitle");
      modalTitle.innerText = pokemon.name;

      let button = document.createElement("button");
      button.setAttribute("type","button");
      button.classList.add("close");
      button.setAttribute("data-dismiss","modal");
      button.setAttribute("aria-label","Close");

        let span = document.createElement("span");
        span.setAttribute("aria-hidden","true");
        span.innerHTML = "&times";

    let modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

      let image = document.createElement("img");
      image.classList.add("modal-body-img");
      image.setAttribute("src", pokemon.imageURL);

      let height = document.createElement("span");
      height.classList.add("modal-body-height");
      height.innerText = "height: " + pokemon.height;

      let type = document.createElement("span");
      type.classList.add("modal-body-type");
      type.innerText = "type: " + pokemon.types;


  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(button);
  button.appendChild(span);
  modalContent.appendChild(modalHeader);
  modalBody.appendChild(image);
  modalBody.appendChild(height);
  modalBody.appendChild(type);
  modalContent.appendChild(modalBody);
}
