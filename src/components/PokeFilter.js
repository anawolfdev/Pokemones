import React from 'react';
import '../stylesheets/Pokefilter.css';

class PokeFilter extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='pokefilter'>
          <h3 className='pokefilter__title'>¡Atrapa tu Pokemon!</h3>
          <input
            type='text'
            id='name'
            name='name'
            onChange={this.props.handlePokeFilter}
          />
        </label>
      </div>
    );
  }
}

export default PokeFilter;
