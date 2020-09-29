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

  function addListItem(pokemon) {
    let list = document.querySelector(".pokemon-list");
    console.log(list);

    let listItem = document.createElement("li");
    console.log(listItem);

    let button = document.createElement("button");
    button.innerText = pokemon.name;
    console.log(button.innerText);
    button.classList.add("button");

    listItem.appendChild(button);

    list.appendChild(listItem);
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
