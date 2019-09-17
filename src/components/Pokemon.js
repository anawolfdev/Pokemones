import React from 'react';

const pokemonTypes = props => {
  return props.pokemon.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
};

const Pokemon = props => {
  return (
    <li className='pokemons'>
      <img
        src={props.pokemon.url}
        alt={props.pokemon.name}
        title={props.pokemon.name}
      />
      <div className='pokemon__card'>
        <h2 className='pokemon__name'>{props.pokemon.name}</h2>
        <ul className='pokemon__types'>{pokemonTypes(props)}</ul>
      </div>
    </li>
  );
};

export default Pokemon;
