import React from 'react';
import Pokemon from './Pokemon';

const renderList = props => {
  return props.pokemons.map((pokemon, index) => {
    return (
      <Pokemon
        key={index}
        pokemon={pokemon}
        addToFavorites={props.addToFavorites}
      />
    );
  });
};

const PokeList = props => {
  return <ul className='pokemon__list'>{renderList(props)}</ul>;
};

export default PokeList;
