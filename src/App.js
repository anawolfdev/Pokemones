import React from 'react';
import getPokemons from './api/Api';
import PokeList from './components/PokeList';
import PokeFilter from './components/PokeFilter';
import './stylesheets/App.css';

let filterPokemons = [];
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      pokeFilter: ''
    };

    this.handlePokeFilter = this.handlePokeFilter.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  componentDidMount() {
    getPokemons().then(pokemons => {
      this.setState({
        pokemons: pokemons
      });
    });
  }

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
    //console.log(pokemons);
    filterPokemons = pokemons;
    this.forceUpdate();
    this.setState({
      pokemons: pokemons
    });
  }

  handlePokeFilter(ev) {
    const pokeFilter = ev.target.value;
    this.setState({ pokeFilter: pokeFilter });
  }

  render() {
    filterPokemons = this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.state.pokeFilter);
    });
    //const pokemons = this.state.pokemons;
    return (
      <div className='App'>
        <h1 className='title'>Mi lista de Pokemon</h1>
        <PokeFilter
          pokeFilter={filterPokemons}
          handlePokeFilter={this.handlePokeFilter}
        />
        <PokeList
          pokemons={filterPokemons}
          addToFavorites={this.addToFavorites}
        />
      </div>
    );
  }
}

export default App;
