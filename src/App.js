import React from 'react';
import getPokemons from './api/Api';
import PokeList from './components/PokeList';
import './stylesheets/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: []
    };
    getPokemons().then(pokemons => {
      this.setState({
        pokemons: pokemons
      });
    });
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  //method of my class
  addToFavorites(id) {
    const pokemons = this.state.pokemons.map(pokemon => {
      if (pokemon.id === id) {
        if (pokemon.fav === true) {
          pokemon.fav = false;
        } else {
          pokemon.fav = true;
        }
      }
      return pokemon;
    });
    this.setState({
      pokemons: pokemons
    });
  }

  render() {
    const pokemons = this.state.pokemons;
    return (
      <div className='App'>
        <h1 className='title'>Mi lista de Pokemon</h1>
        <PokeList pokemons={pokemons} addToFavorites={this.addToFavorites} />
      </div>
    );
  }
}

export default App;
