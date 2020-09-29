// Wrap pokemonList in IIFE
let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Jigglypuff", height: 1.5, types: ["flying", "friend guard"] },
    { name: "Pikachu", height: 0.4, types: ["electric", "lightning rod"] },
    { name: "Shaymin", height: 0.2, types: ["ground"] },
    {
      name: "Clefairy",
      height: 1.6,
      types: ["speed", "magic guard", "friend guard"],
    },
    {
      name: "Lillipup",
      height: 0.4,
      types: ["water", "pick up", "vital spirit"],
    },
    {
      name: "Togepi",
      height: 0.3,
      types: ["fire", "hustle", "super luck"],
    },
  ];

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
    console.log(pokemon.name);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    addListItem: addListItem,
    getAll: getAll,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
