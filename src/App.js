import React from 'react';
import './stylesheets/App.css';
import pokemons from './components/Pokemon';
/*import PokeList from './components/PokeList';*/

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: pokemons
    };
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons() {
    const ENDPOINT = pokemons;

    fetch(ENDPOINT)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='App'>
        <h1 className='title'>Mi lista de pokemon</h1>
        <ul className='pokemon__list'>
          {pokemons.map((item, index) => {
            return (
              <li className='pokemon__id' key={`p${index}`} id={`p${index}`}>
                <img src={item.url} alt='pokemon__image' />
                <div className='pokemon__card'>
                  <h2 className='pokemon__name'>{item.name}</h2>
                  <p className='pokemon__types'>{item.types}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
