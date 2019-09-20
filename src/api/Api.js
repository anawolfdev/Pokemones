const getPokemons = () => {
  return fetch('./pokemon-data.json')
    .then(res => res.json())
    .then(pokemons => {
      return pokemons.map(pokemon => {
        return {
          id: pokemon.id,
          url: pokemon.url,
          name: pokemon.name,
          types: pokemon.types,
          fav: false
          //pokeFilter: ''
        };
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export default getPokemons;
