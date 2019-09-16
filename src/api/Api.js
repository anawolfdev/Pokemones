const getPokemons = () => {
  return fetch('./pokemon-data.json')
    .then(res => res.json())
    .then(pokemons => {
      console.log(pokemons);
      return pokemons.map(pokemon => {
        return {
          url: pokemon.url,
          name: pokemon.name,
          types: pokemon.types
        };
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export default getPokemons;
