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

// Iterate each pokemon list
for (let i = 0; i < pokemonList.length; i++) {
  document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})`);

  if (pokemonList[i].height > 0.4) {
    document.write(" This pokemon is tall.");
  } else if (pokemonList[i].height < 0.4) {
    document.write(" This pokemon is short.");
  } else {
    document.write(" This pokemon is just right.");
  }

  if (pokemonList[i].height >= 0.6) {
    document.write(" This pokemon is the tallest one!");
  }

  document.write("<br>");
  document.write("<br>");
}
