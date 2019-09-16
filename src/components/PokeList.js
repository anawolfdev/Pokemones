import React from 'react';
import Pokemon from './Pokemon';

const renderList = props => {
  console.log(props);
  return props.pokemons.map((pokemon, index) => {
    return <Pokemon key={index} pokemon={pokemon} />;
  });
};

const PokeList = props => {
  return <ul className='pokemon__list'>{renderList(props)}</ul>;
};

export default PokeList;
