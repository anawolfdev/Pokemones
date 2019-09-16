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
  }

  render() {
    const pokemons = this.state.pokemons;
    console.log(pokemons);
    console.log('Rendering...');
    return (
      <div className='App'>
        <h1 className='title'>Mi lista de Pokemon</h1>
        <PokeList pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
