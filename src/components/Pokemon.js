import React from 'react';

const pokemonTypes = props => {
  return props.pokemon.types.map((type, index) => {
    return (
      <li className='pokemon__skills' key={index}>
        {type}
      </li>
    );
  });
};

const Pokemon = props => {
  const handleClick = () => {
    props.addToFavorites(props.pokemon.id);
  };

  const bgColor = props.pokemon.fav === true ? '#67f33c' : '#ebe6f9';

  return (
    <li
      className='pokemons'
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
    >
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
