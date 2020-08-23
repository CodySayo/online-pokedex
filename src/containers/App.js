import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import PokemonCardList from '../components/PokemonCardList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      sprites: [],
    }
  }

  async componentDidMount() {
    const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then((allPokemon) => allPokemon.results);

    const loadedPkmn = await Promise.all(pokemon.map(
      async (pkmn) => {
        const pkmnFromURL = await fetch(pkmn.url);
        const secRequest = await fetch(pkmnFromURL.url);
        return secRequest.json();
      }
    ))

    const spriteArray = await Promise.all(loadedPkmn.map(
      async (pkmn) => {
        const spriteReq = await fetch(pkmn.sprites.front_default);
        return spriteReq.url;
      }
    ))

    this.setState({ pokemon: loadedPkmn })
    this.setState({ sprites: spriteArray})
    console.log(this.state.sprites)
  }


  render() {
    return (this.state.pokemon === 151 && this.state.sprites === 151) ?
      (
        <div className="App">
          <h1>Loading...</h1>
        </div>
      )
      :
      (
        <div className="App">
          <PokemonCardList pokemonArray={this.state.pokemon} sprites={this.state.sprites}/>
        </div>
      )
  }
}

export default App;
