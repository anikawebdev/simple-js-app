let pokemonList = [];
console.log(pokemonList);

pokemonList = [
  { name: "Jigglypuff", height: 0.5, types: ["cute charm", "friend guard"] },
  { name: "Pikachu", height: 0.4, types: ["static", "lightning rod"] },
  { name: "Shaymin", height: 0.2, types: ["natural cure"] },
  {
    name: "Clefairy",
    height: 0.6,
    types: ["cute charm", "magic guard", "friend guard"],
  },
  {
    name: "Lillipup",
    height: 0.4,
    types: ["run away", "pick up", "vital spirit"],
  },
  {
    name: "Togepi",
    height: 0.3,
    types: ["serene grace", "hustle", "super luck"],
  },
];

console.log(pokemonList);

// Foreach loop
pokemonList.forEach(function (pokemon) {
  console.log(pokemon.name);
  console.log(pokemon.height);

  document.write(`${pokemon.name} (height: ${pokemon.height})`);

  if (pokemon.height > 0.4) {
    document.write(" This pokemon is tall.");
  } else if (pokemon.height < 0.4) {
    document.write(" This pokemon is short.");
  } else {
    document.write(" This pokemon is just right.");
  }

  if (pokemon.height >= 0.6) {
    document.write(" This pokemon is the tallest one!");
  }

  document.write("<br>");
  document.write("<br>");
});
