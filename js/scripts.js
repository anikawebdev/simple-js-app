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

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  let size;

  if (pokemon.height > 1.5) {
    size = "Wow it's a big pokemon";
  } else if (pokemon.height > 1 && pokemon.height <= 1.5) {
    size = "This is a medium sized pokemon";
  } else {
    size = "This is a small pokemon";
  }

  let color;

  if (pokemon.types.includes("water")) {
    color = '<span style="color: blue;">';
  } else if (pokemon.types.includes("ground")) {
    color = '<span style="color: brown;">';
  } else if (pokemon.types.includes("flying")) {
    color = '<span style="color: lightblue;">';
  } else if (pokemon.types.includes("electric")) {
    color = '<span style="color: red;">';
  } else if (pokemon.types.includes("speed")) {
    color = '<span style="color: grey;">';
  } else if (pokemon.types.includes("fire")) {
    color = '<span style="color: orange;">';
  }

  document.write(
    '<div class="box">' +
      pokemon.name +
      " (height: " +
      pokemon.height +
      "m)" +
      "<br>" +
      size +
      "<br>" +
      color +
      pokemon.types +
      "<br>" +
      "</div>"
  );
});
