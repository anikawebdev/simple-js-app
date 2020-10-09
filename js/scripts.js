// Wrap pokemonList in IIFE
let pokemonRepository = (function () {
  let pokemonList = [];
  // let apiURL = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let apiURL = "https://pokeapi.co/api/v2/pokemon/";

  function showLoadingMessage() {
    console.log("Loading... Please wait...");
    let paragraph = document.createElement("p");
    paragraph.classList.add("loading-msg");
    paragraph.innerText = "Loading... Please wait...";
    document.body.appendChild(paragraph);
  }

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
        pokemon.imageURL =
          pokemonDetails.sprites.other.dream_world.front_default;
        pokemon.height = pokemonDetails.height;
        pokemon.types = [];
        pokemonDetails.types.forEach(function (pokemontype) {
          pokemon.types.push(pokemontype.type.name);
        });
      })
      .catch(function (error) {
        hideLoadingMessage();
        console.error(error);
      });
  }

  function hideLoadingMessage() {
    console.log("Done");
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let list = document.createElement("ul");
    list.classList.add("pokemon-list");

    let listItem = document.createElement("li");
    list.appendChild(listItem);

    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    listItem.appendChild(button);
    document.body.appendChild(list);
    // clickable(button, pokemon);
    button.addEventListener("click", function (event) {
      return showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log("CLICK");
    // console.log(pokemon.name);

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
  let modalContainer = document.querySelector("#modal-container");

  // Clear all existing modal content
  modalContainer.innerHTML = "";

  let modal = document.createElement("div");
  modal.classList.add("modal");

  // Add the new modal content
  let closeButtonElement = document.createElement("button");
  closeButtonElement.classList.add("modal-close");
  closeButtonElement.innerText = "Close";
  closeButtonElement.addEventListener("click", hideModal);

  let imageElement = document.createElement("img");
  imageElement.classList.add("modal-img");
  imageElement.setAttribute("src", pokemon.imageURL);

  //creating element for height in modal content
  let heightElement = document.createElement("p");
  heightElement.innerText = "height : " + pokemon.height;
  //creating element for weight in modal content

  let titleElement = document.createElement("h1");
  titleElement.innerText = pokemon.name;

  let typeElement = document.createElement("p");
  typeElement.innerText = pokemon.types;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(imageElement);
  modal.appendChild(heightElement);
  modal.appendChild(typeElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add("is-visible");
}

//hides modal when clicked on close button
function hideModal() {
  let $modalContainer = document.querySelector("#modal-container");
  $modalContainer.classList.remove("is-visible");
}
//hides modal when clicked on ESC on keyboard
window.addEventListener("keydown", (e) => {
  let $modalContainer = document.querySelector("#modal-container");
  if (e.key === "Escape" && $modalContainer.classList.contains("is-visible")) {
    hideModal();
  }
});
//hides modal if clicked outside of it
let $modalContainer = document.querySelector("#modal-container");
$modalContainer.addEventListener("click", (e) => {
  let target = e.target;
  if (target === $modalContainer) {
    hideModal();
  }
});
